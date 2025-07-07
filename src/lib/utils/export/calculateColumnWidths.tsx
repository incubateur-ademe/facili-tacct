import * as XLSX from 'xlsx';

export const calculateColumnWidths = (worksheet: XLSX.WorkSheet): XLSX.ColInfo[] => {
  const colWidths: { [key: string]: number } = {};
  const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');

  for (let col = range.s.c; col <= range.e.c; col++) {
    const colLetter = XLSX.utils.encode_col(col);
    let maxWidth = 10;
    for (let row = range.s.r; row <= range.e.r; row++) {
      const cellAddress = colLetter + (row + 1);
      const cell = worksheet[cellAddress];
      if (cell && cell.v) {
        const cellValue = String(cell.v);
        const cellWidth = cellValue.length;
        maxWidth = Math.max(maxWidth, cellWidth);
      }
    }
    // set une largeur maximale pour éviter des colonnes trop larges
    colWidths[col] = Math.min(maxWidth + 2, 50);
  }
  return Object.keys(colWidths).map((col) => ({
    wch: colWidths[parseInt(col)]
  }));
};
