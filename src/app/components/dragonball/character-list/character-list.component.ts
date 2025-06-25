import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent { 
  /* Indica que la propiedad characterList es obligatoria y debe ser de tipo Character[]. Esto significa que si el componente padre no proporciona un valor para characterList, Angular lanzará un error en tiempo de ejecución, lo que ayuda a evitar problemas relacionados con datos no proporcionados. */
  characterList = input.required<Character[]>();
  listName = input.required<string>();
}

