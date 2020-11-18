import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { PreviewDatagridComponent } from './preview-datagrid/preview-datagrid.component';

@NgModule({
  declarations: [AppComponent, DatagridComponent, PreviewDatagridComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DatagridComponent, PreviewDatagridComponent],
  entryComponents: [DatagridComponent, PreviewDatagridComponent]
})
export class AppModule {}
