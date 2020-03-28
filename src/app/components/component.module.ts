import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountTableComponent } from './count-table/count-table.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  declarations: [
    CountTableComponent
  ],
  exports: [
    CountTableComponent
  ]
})
export class ComponentModule {}
