import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  public canvas;
  private tamPlaneta: number;
  private tamAsteroide: number;
  public tamOrbitas: Array<number> = [500, 150, 300];
  private i = 0;
  private orbitas = [];
  private planeta = 50;
  private rotaciones = [];

  constructor() { }

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

      this.orbitas = [p.circle(0, 0, this.tamOrbitas[0]), p.circle(0, 0, p.mouseY), p.circle(0, 0, this.tamOrbitas[2])];
      p.fill(0, 0, 0, 255);

      this.planeta = p.circle(0, 0, this.tamPlaneta);
      p.fill(255, 0, 0);
      p.circle(0, -p.mouseY / 2, this.tamAsteroide);
      p.fill(0, 255, 0);

      this.rotaciones.push((this.tamOrbitas[2] - p.mouseY) * 0.001 * this.i);
      p.rotate(this.rotaciones[0]);
      p.circle(-this.tamOrbitas[2] / 2, 0, this.tamAsteroide);
      p.rotate(-this.rotaciones[0]);

      this.rotaciones.push((this.tamOrbitas[0] - p.mouseY) * 0.001 * this.i);
      p.rotate(this.rotaciones[1]);
      p.circle(this.tamOrbitas[0] / 2, 0, this.tamAsteroide);
      this.i += 0.1;

    };
  }

}
