import { Component, OnInit, ViewEncapsulation, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output()
  title = 'ScrapFisher - MANUAL';
  @Output()
  body = `
  <h2 id="introduction">Introduction</h2>

  <p>
    Control your satellite space debris collector through low Earth orbit.
    Collect as much as you can and transform it into luminous shooting stars. Earn money and make your venture grow.
  </p>

  <h2 id="thegame">
    The game
  </h2>

  <p>
    After a mysterious message of the future was transmitted through the screen of your computer, you decide to create
    a revolutionary and innovative business to take advantage of space debris and avoid a catastrophic destination.
    Travel from orbit to orbit, sell your waste collection services and "deliver" shooting stars to your home.
    Earn money and invest it in your startup so that it grows and uses part of the collected material to propel your ship.
    Be careful, if you do not meet your deliveries on time there will be no pay and if you do not collect enough, you can run out of fuel.
    The challenges will begin with a call that may refer to the cleaning of an orbit or the commission of a shooting star in a particular
    place, which will be the product of the collection of orbital garbage and its consequent projection and incineration in the atmosphere.
  </p>

  <h3 id="howtowin">
    How to win?
  </h3>

  <p>
    The game ends once you have completed all missions corresponding to each of the levels.
  </p>

  <h3 id="levels">
    Levels
  </h3>

  <p>
    The game has several levels, which are made up of missions.
    The first levels are developed at low altitudes and their difficulty will be lower, thanks
    to the low presence of space debris and the proximity to the earth's surface. The higher
    levels will be developed at higher altitude which makes them more difficult since the player
    in addition to having to face a greater amount of garbage, which will increase the chances of
    colliding, will be further from the earth's surface , this will make the return of the satellite
    more difficult to fire the shooting stars that may be requested, adding as difficulty the excessive fuel expenditure that this requires.
  </p>

  <h3 id="missions">
    Missions
  </h3>

  <p>
    There are two types of missions in the game:
  </p>

  <ul>
    <li>Orbit cleaning</li>
    <li>Orders of fleeting entrellas upon request.</li>
  </ul>

  <h3 id="themoney">
    The  money
  </h3>

  <p>
    The money obtained with the fulfillment of the missions can be used to:
  </p>
  <ul>
    <li>Ship improvements</li>
    <li>Buy necessary fuel</li>
  </ul>

  <h3 id="theend">
    The end
  </h3>

  <p>
    The game will come to an end for three reasons:
  </p>

  <ul>
    <li>100% waste collection (Overcome all missions)</li>
    <li>The ship runs out of fuel and the player does not have enough money to recharge.</li>
    <li>Ship collision with large space debris.</li>
  </ul>
  `;
  @Output()
  footer = `
    <button type="button" class="btn btn-light" (click)="modal.close('Close click')">Cerrar</button>
  `;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true, size: 'lg' });
  }

}
