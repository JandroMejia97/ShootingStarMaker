import { Desecho } from './desecho';
import { Punto } from './punto';


export class Orbital {
  public radio: number;
  public numero: number;
  public color: string;
  public desecho?: Desecho;
  public entro: Punto;

}
