import { Component, ElementRef, Input, ViewChild } from '@angular/core';

export interface RowData {
  status: string;
  [key: string]: any;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent {
  dataSource: Array<RowData> = [];
  headerColumns: Array<string> = [];
  headerColumnsCount = 1; // Value 1 is to make sure sure the top actions row is displayed.
  selectableRows = 0;
  selectedRows = new Map();
  selectedRowCount = 0;

  @Input('gridData')
  set setGridData(data: Array<RowData>) {
    this.extractHeader(data);
  }

  @ViewChild('selectAll')
  selectAllCheckbox!: ElementRef;

  constructor() {}

  /**
   * Extracts all the unique column names for given data.
   * Calculates no.of selectable rows based on status.
   * Adds property "checked" to track row selection.
   * Sets datasource to grid.
   *
   * @param {Array<RowData>} [data=[]]
   * @memberof DatagridComponent
   */
  extractHeader(data: Array<RowData> = []): void {
    const headerRow: Array<string> = [];
    data.forEach((row: RowData) => {
      for (const header in row) {
        if (headerRow.indexOf(header) === -1) {
          headerRow.push(header);
        }
      }
      if (row.status === 'available') {
        this.selectableRows++;
      }
      row.checked = false;
    });
    this.headerColumnsCount = headerRow.length;
    this.headerColumns = headerRow;
    this.dataSource = data;
  }

  /**
   * For rows that are selectable (status = availalble),
   * sets the state of checkbox appropriately and
   * also updates the state of selectAll checkbox.
   *
   * @param {number} rowIndex
   * @param {RowData} rowValue
   * @memberof DatagridComponent
   */
  onRowSelectionChanged(rowIndex: number, rowValue: RowData): void {
    if (rowValue.status === 'available') {
      this.dataSource[rowIndex].checked = !this.dataSource[rowIndex]?.checked;
      this.selectedRows.has(rowIndex)
        ? this.selectedRows.delete(rowIndex)
        : this.selectedRows.set(rowIndex, rowValue);
      this.selectedRowCount = this.selectedRows.size;
      let checked = false;
      let indeterminate = false;
      if (this.selectedRows.size === 0) {
        checked = false;
        indeterminate = false;
      } else if (this.selectedRows.size === this.selectableRows) {
        checked = true;
        indeterminate = false;
      } else {
        checked = false;
        indeterminate = true;
      }
      this.selectAllCheckbox.nativeElement.checked = checked;
      this.selectAllCheckbox.nativeElement.indeterminate = indeterminate;
    }
  }

  /**
   * Sets the individual row selected/unselected state based on selectAll checkbox state.
   * Updates the selectedRows map and count.
   *
   * @param {boolean} selectAllStatus
   * @memberof DatagridComponent
   */
  onSelectAllClicked(selectAllStatus: boolean): void {
    this.selectedRows.clear();
    if (selectAllStatus) {
      this.dataSource.forEach((value, index) => {
        if (value.status === 'available') {
          value.checked = true;
          this.selectedRows.set(index, value);
        }
      });
    } else {
      this.dataSource.forEach(value => {
        if (value.status === 'available') {
          value.checked = false;
        }
      });
    }
    this.selectedRowCount = this.selectedRows.size;
  }

  /**
   * Shows alert window with selected rows attributes.
   *
   * @memberof DatagridComponent
   */
  download(): void {
    let message = '';
    if (this.selectedRows.size > 0) {
      this.selectedRows.forEach(row => {
        message += `\nDevice: ${row.device} \nPath: ${row.path}\n \n`;
      });
    } else {
      message = '\nPlease select row(s) to download.';
    }

    window.alert(message);
  }
}
