
import { Injectable } from '@angular/core';
import { Hero } from './hero';                  // 1.0  Get hero data
import { HEROES } from './mock-heroes';         // 1.0  Get heroes list data

@Injectable({
  providedIn: 'root'                //  2.0 Provide the HeroService: added by default
})

export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {             //  1.1  Get hero data:  Add a getHeroes method to return the mock heroes.
    return HEROES;
  }
}
