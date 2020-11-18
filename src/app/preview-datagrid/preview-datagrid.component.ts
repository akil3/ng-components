import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
export interface GridData {
  status: string;
  [key: string]: any;
}
export const GRID_DATA: GridData[] = [
  {
    name: 'smss.exe',
    device: 'Stark',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
    status: 'scheduled'
  },
  {
    name: 'netsh.exe',
    device: 'Targaryen',
    path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
    status: 'available'
  },
  {
    name: 'uxtheme.dll',
    device: 'Lanniester',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
    status: 'available'
  },
  {
    name: 'cryptbase.dll',
    device: 'Martell',
    path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
    status: 'scheduled'
  },
  {
    name: '7za.exe',
    device: 'Baratheon',
    path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
    status: 'scheduled'
  }
];

@Component({
  selector: 'app-preview-datagrid',
  templateUrl: './preview-datagrid.component.html',
  styleUrls: ['./preview-datagrid.component.scss']
})
export class PreviewDatagridComponent implements OnInit {
  datasource = GRID_DATA;
  constructor() {}

  ngOnInit(): void {}
}
