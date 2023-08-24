
import { hero } from '../hero';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  id?: number;
 
   Hero?:  hero;
    constructor (private route: ActivatedRoute,  private heroService: HeroService,
      private location: Location){
    }
    ngOnInit(): void {
      this.getHero();
    }
    
    getHero(): void {
      const idString = this.route.snapshot.paramMap.get('id');
      if (!idString || idString === null)
      return;

      const id = +idString;
      this.heroService.getHero(id)
        .subscribe(hero => this.Hero = hero);
    }
     goBack(): void {
      this.location.back();
    }
}

