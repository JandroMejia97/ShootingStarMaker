import { Punto } from './punto';
import { Orbital } from './Orbital';
import { Desecho } from './Desecho';
import { Mision } from './Mision';

export class Satelite {
  combustible: number;
  velocidad: number;
  altitud: number;
  posicion: Punto;
  orbital: Orbital;
  desechos: Desecho[] = [];
  mision: Mision;
}
