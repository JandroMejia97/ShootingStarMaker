import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Output()
  textBtnLaunch = 'Start';
  @Output()
  title = 'ScrapFisher';
  @Output()
  body = `
    <img src="../../../assets/images/mockup.png" alt="Videogame template">
  `;
  @Output()
  footer = `
    <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Cerrar</button>
  `;
  constructor() { }

  ngOnInit() {
  }

}
