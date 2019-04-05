import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';           //  3.0
import { HeroService } from '../hero.service';        //  3.0  Update the HeroService

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES;                                 //  3.1
  heroes: Hero[];                                     //  3.1   Update  the HeroService
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }   //  3.2   Inject  the HeroService

  ngOnInit() {
    this.getHeroes();                                 //  3.4   Call it in ngOnInit
  }

  onSelect(hero: Hero): void {                        // 0.0
    this.selectedHero = hero;
  }

  getHeroes(): void {                                 //  3.3   add getHeroes
    this.heroes = this.heroService.getHeroes();
  }
}
