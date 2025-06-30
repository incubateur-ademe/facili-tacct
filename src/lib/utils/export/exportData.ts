import * as XLSX from 'xlsx';

type ExportDataRow = Record<string, string | number | boolean | null | bigint | undefined>;

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
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
    XLSX.writeFile(workbook, filename);
  } catch (error) {
    console.error('Error exporting to XLSX:', error);
    throw new Error('Failed to export data to XLSX');
  }
}
