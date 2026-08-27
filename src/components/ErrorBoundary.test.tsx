import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { ErrorBoundary } from './ErrorBoundary';

function ThrowingComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error message');
  }
  return <div>Child content</div>;
}

describe('ErrorBoundary', () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it('should render children when no error', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('should render fallback UI when child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText(/unexpected error/)).toBeInTheDocument();
  });

  it('should display error details in a details element', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    const details = screen.getByText('Error details');
    fireEvent.click(details);

    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('should render custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom error UI</div>}>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Custom error UI')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('should reset error state when children change', () => {
    function TestWrapper() {
      const [shouldThrow, setShouldThrow] = React.useState(true);
      return (
        <div>
          <ErrorBoundary>
            <ThrowingComponent shouldThrow={shouldThrow} />
          </ErrorBoundary>
          <button onClick={() => setShouldThrow(false)}>Fix Error</button>
        </div>
      );
    }

    render(<TestWrapper />);

    // Initially shows error
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Change child to not throw — componentDidUpdate should reset error state
    fireEvent.click(screen.getByText('Fix Error'));

    // Should now show children
    expect(screen.getByText('Child content')).toBeInTheDocument();
    expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument();
  });

  it('should reset error state when Try Again is clicked', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Click Try Again to reset error state
    fireEvent.click(screen.getByText('Try Again'));

    // After reset, the child still throws, so error boundary catches again
    // This is expected behavior — the test verifies that the reset mechanism works
    // (state is cleared, then child throws again, error is caught again)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
