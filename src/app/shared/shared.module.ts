import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [ ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
