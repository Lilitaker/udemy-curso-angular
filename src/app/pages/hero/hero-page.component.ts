import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal/* , WritableSignal */ } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [ UpperCasePipe ],
})

export class HeroPageComponent {
  // Writable signals
  // name: WritableSignal<string> = signal<string>('Ironman');
  name= signal<string>('Ironman');
  age= signal<number>(45);

  //Computed signals
  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })
  //capitalizedName = computed(() => this.name().toUpperCase())
  changeHero() {
    this.name.set('Spiderman');;
    this.age.set(22);
  }
  resetForm(){
    this.name.set('Ironman');;
    this.age.set(45);
  }
  changeAge() {
    this.age.set(60);
  }
}