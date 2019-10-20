import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.css']
})
export class ModalOptionsComponent implements OnInit{
  closeResult: string;
  @Input()
  textBtnLaunch: string;
  @Input()
  title: string;
  @Input()
  body: string;
  @Input()
  footer: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) { this.modalService.open(content, {size: 'xl'}); }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openScrollableXLContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, size: 'xl' });
  }
}
