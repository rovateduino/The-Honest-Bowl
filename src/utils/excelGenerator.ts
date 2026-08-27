import { DOWNLOAD_LINKS } from '../data/downloadLinks';

export function downloadCalculadoraExcel(): void {
  const anchor = document.createElement('a');
  anchor.href = DOWNLOAD_LINKS.portionCalculator;
  anchor.download = 'the-honest-bowl-exact-portion-calculator-workbook.xlsx';
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
