import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    private canvas;
    private tamPlaneta;
    private tamAsteroide;
    private tamOrbitas;
    private i;
    private orbitas;
    private planeta;
    private rotaciones;

  constructor(

  ) {
    this.tamPlaneta = 50;
    this.tamAsteroide = 10;
    this.tamOrbitas = [500, 150, 300];
    this.i = 0;
    this.orbitas = [];
    this.rotaciones = [];
  }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.canvas = new p5(this.sketch);
  }
  private sketch(p:any) {

    p.setup = () => {
      p.createCanvas(800, 600).parent('canvas');
    };
    p.draw = () => {
      p.background(255, 255, 0);
      p.fill(0, 0, 0, 0);
      p.translate(p.width / 2, p.height / 2);

      p.circle(0, 0, 500);
      p.circle(0, 0, p.mouseY);
      p.circle(0, 0, 300);

      p.fill(0, 0, 0, 255);

      p.circle(0, 0, 50);
      p.fill(255, 0, 0);
      p.circle(0, -p.mouseY / 2, 10);
      p.fill(0, 255, 0);

      p.rotate((300 - p.mouseY) * 0.001 * this.i);
      p.circle(-300 / 2, 0, 10);
      p.rotate(-(300 - p.mouseY) * 0.001 * this.i);

      p.rotate(-(500 - p.mouseY) * 0.001 * this.i);
      p.circle(500 / 2, 0, 10);
      p.rotate((500 - p.mouseY) * 0.001 * this.i);
      this.i += 0.1;

    };
  }

}
