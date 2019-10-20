import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PERSONAS } from '../../data/mock-personas';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  personas: Persona[] = PERSONAS;

  constructor() { }

  ngOnInit() {
  }

}
