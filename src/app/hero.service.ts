import { Injectable, ɵɵtrustConstantHtml } from '@angular/core';
import { hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }
  
  getHeroes(): Observable<hero[]> {
    this.messageService.add('HeroService: mensajes de los heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  
}
