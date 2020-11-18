import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewDatagridComponent } from './preview-datagrid/preview-datagrid.component';
const routes: Routes = [{ path: '', component: PreviewDatagridComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
