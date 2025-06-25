import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: 'dragonball-page.component.html',
})

export class DragonballPageComponent {
  name = signal('');
  power= signal(0);

  characterList = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    /* {id: 2, name: 'Vegeta', power: 8000},
    {id: 3, name: 'Piccolo', power: 3000},
    {id: 4, name: 'Yamcha', power: 500}, */
  ]);

  /* 
  --> Parse string input value to number 
  --> We need this in the input: power.set(onPowerInputChange(txtPower.value))
  onPowerInputChange(value: string) {
    const numberValue = parseFloat(value);
    return numberValue;
  } 
  */

  addCharacter = () => {
    if(!this.name() || !this.power() || this.power() <= 0){
      return;
    }
    const newCharacter: Character = {
      id: this.characterList().length + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characterList.update(
      (list) => [...list, newCharacter]
    );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}