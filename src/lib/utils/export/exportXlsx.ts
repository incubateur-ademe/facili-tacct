import * as XLSX from 'xlsx';

type ExportDataRow = Record<string, string | number | boolean | null | bigint | undefined>;

const calculateColumnWidths = (worksheet: XLSX.WorkSheet): XLSX.ColInfo[] => {
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
  return Object.keys(colWidths).map(col => ({
    wch: colWidths[parseInt(col)]
  }));
};

export const generateExportFilename = (
  baseName: string,
  type: string,
  libelle: string
): string => {
  const cleanLibelle = libelle
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Œ/g, 'OE')
    .replace(/œ/g, 'oe')
    .replace(/Æ/g, 'AE')
    .replace(/æ/g, 'ae')
    .replace(/[^a-zA-Z0-9]/g, '_');
  return `${baseName}_${type}_${cleanLibelle}.xlsx`;
}

export const exportToXLSX = (
  data: ExportDataRow[],
  baseName: string,
  type: string,
  libelle: string,
  sheetName: string
): void => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }
  try {
    const filename = generateExportFilename(baseName, type, libelle);
    const worksheet = XLSX.utils.json_to_sheet(data);
    worksheet['!cols'] = calculateColumnWidths(worksheet);
    
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, filename);
  } catch (error) {
    console.error('Error exporting to XLSX:', error);
    throw new Error('Failed to export data to XLSX');
  }
}

export const exportMultipleSheetToXLSX = <T extends Record<string, unknown[]>>(
  data: T,
  baseName: string,
  type: string,
  libelle: string
): void => {
  try {
    const filename = generateExportFilename(baseName, type, libelle);
    const workbook = XLSX.utils.book_new();
    
    Object.entries(data).forEach(([sheetName, sheetData]) => {
      if (sheetData && sheetData.length > 0) {
        const worksheet = XLSX.utils.json_to_sheet(sheetData as any[]);
        worksheet['!cols'] = calculateColumnWidths(worksheet);
        XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      }
    });
    
    if (workbook.SheetNames.length > 0) {
      XLSX.writeFile(workbook, filename);
    } else {
      console.warn('No data to export in any sheet');
    }
  } catch (error) {
    console.error('Error exporting multiple sheets to XLSX:', error);
    throw new Error('Failed to export data to XLSX');
  }
}
