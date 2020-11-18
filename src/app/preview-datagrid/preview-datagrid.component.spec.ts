import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDatagridComponent } from './preview-datagrid.component';

describe('PreviewDatagridComponent', () => {
  let component: PreviewDatagridComponent;
  let fixture: ComponentFixture<PreviewDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDatagridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
