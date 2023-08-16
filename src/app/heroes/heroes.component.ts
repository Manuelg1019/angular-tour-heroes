import { Component } from '@angular/core';
import { hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes = HEROES;
  selectedHero?: hero;

  onSelect(hero: hero): void {
  if (this.selectedHero === hero){
   this.selectedHero=undefined;
  }
  else {
    this.selectedHero=hero;
}
};
}

