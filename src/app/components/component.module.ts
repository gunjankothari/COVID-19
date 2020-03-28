import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CountTableComponent } from './count-table/count-table.component';
import { MatricCardComponent } from './matric-card/matric-card.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
  ],
  declarations: [
    CountTableComponent,
    MatricCardComponent,
  ],
  exports: [
    CountTableComponent,
    MatricCardComponent,
  ]
})
export class ComponentModule {}
