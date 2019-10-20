import { Desecho } from './desecho';
import { Punto } from './punto';


export class Orbital {
  public radio: number;
  public numero: number;
  public color: string;
  public desecho?: Desecho;
  public entro: Punto;

  constructor(
    radio: number,
    numero: number,
    color: string,
    desecho: Desecho,
    centro: Punto
  ){
    this(radio, numero, color, centro);
    this.desecho = desecho;
  }
  constructor(
    radio: number,
    numero: number,
    color: string,
    centro: Punto
  ){
    this.radio = radio;
  }
}
