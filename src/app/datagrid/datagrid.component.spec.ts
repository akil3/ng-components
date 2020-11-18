import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagridComponent } from './datagrid.component';

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

export const HeaderColumns = ['name', 'device', 'path', 'status'];

describe('DatagridComponent', () => {
  let component: DatagridComponent;
  let fixture: ComponentFixture<DatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatagridComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should extract header columns from data', () => {
    component.extractHeader(GRID_DATA);
    expect(component.headerColumns).toEqual(HeaderColumns);
    expect(component.headerColumnsCount).toEqual(4);
  });
});
