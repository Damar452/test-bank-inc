import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExportDocumentService {

  constructor() { }

   exportToXLS(data: any[], filename: string, sheetname: string): void {
      const workbook = XLSX.utils.book_new();
      const dataFormated = data.map(({ images, category, ...rest }) => rest);
      const worksheetData = XLSX.utils.json_to_sheet(dataFormated, { header: Object.keys(dataFormated[0])});
      XLSX.utils.sheet_add_json(worksheetData, dataFormated, { origin: 'A2', skipHeader: true });
      XLSX.utils.book_append_sheet(workbook, worksheetData, sheetname);
      XLSX.writeFile(workbook, `${filename}.xlsx`);
  }

  public exportToCSV(data: any[], filename: string): void {
    const csvContent = this.formatData(data).map(row => row.join(',')).join('\n');
    const csvBlob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    this.saveAs(csvBlob, `${filename}.csv`);
  }

  private formatData(data: any[]): any[] {
    const newArray = data.map(({ images, category, ...rest }) => rest);
   return newArray.map((obj, index) => [index + 1, ...Object.values(obj)]);
  }

  private saveAs(blob: Blob, filename: string): void {
    const link = document.createElement('a');
    const url = window.URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
