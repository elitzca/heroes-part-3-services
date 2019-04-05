import { Component, OnInit } from '@angular/core';
import { HeroClass } from '../hero';
// import { _HEROES } from '../mock-heroes';           //  3.0
import { HeroService } from '../hero.service';        //  3.0  Update the HeroService

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes = _HEROES;                                 //  3.1
  heroes: Array <HeroClass>;                                     //  3.1   Update  the HeroService
  // heroes: HeroClass[];                                     //  3.1   Update  the HeroService
  selectedHero: HeroClass;

  constructor(private heroService: HeroService) { }   //  3.2   Inject  the HeroService

  ngOnInit() {
    this.getHeroesLocal();                                 //  3.4   Call it in ngOnInit
    // this.heroes = this.heroService.getHeroesService();
  }

  onSelect(hero: HeroClass): void {                        // 0.0
    this.selectedHero = hero;
  }

  getHeroesLocal(): void {                                 //  3.3   add getHeroes
    this.heroes = this.heroService.getHeroesService();
  }
}
