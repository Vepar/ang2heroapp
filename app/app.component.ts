import { Component } from '@angular/core';


export class Hero {
  id: number;
  name: string
}



@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>

  <h2>{{hero.name}} details!</h2>
  <div>
    <label>
      id:
    </label>
    {{hero.id}}
  </div>
  <div>
    <label>
      name:
    </label>
    <input [(ngModel)]="hero.name" placeholder="name22">
  </div>`

})

// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombast' },
//   { id: 14, name: 'Celetieas' },
//   { id: 15, name: 'Magenta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' },
// ];

export class AppComponent {
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: HEROES;
}
