import { Component, signal } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { Character } from '../../interfaces/character.interface';

@Component({
  templateUrl: 'dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterAddComponent, CharacterListComponent],
})

export class DragonballSuperPageComponent {
  characterList = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter = (newCharacter: Character) => {
    this.characterList.update(
      list => [...list, newCharacter]
    );
  }
}