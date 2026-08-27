export function downloadCalculadoraExcel(): void {
  const anchor = document.createElement('a');
  anchor.href = '/the-honest-bowl-exact-portion-calculator-workbook.xlsx';
  anchor.download = 'the-honest-bowl-exact-portion-calculator-workbook.xlsx';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
