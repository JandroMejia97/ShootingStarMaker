import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ModalOptionsComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    NotFoundComponent,
    ModalOptionsComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    NotFoundComponent,
    ModalOptionsComponent
  ]
})
export class SharedModule { }
