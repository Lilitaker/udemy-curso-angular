import { Component, inject } from '@angular/core';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  templateUrl: 'dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterAddComponent, CharacterListComponent],
})

export class DragonballSuperPageComponent {
  /* // Manera antigua de inyectar un servicio
  constructor(
    public dragonballService: DragonballService
  ){} 

  addCharacter() {
    this.dragonballService.addCharacter
  }
  */

  // Nueva forma de inyectar un servicio
  public dragonballService = inject(DragonballService);
}