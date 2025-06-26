import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

// Decorador Injectable transforma una clase en un servicio
// root es para que el servicio esté a nivel global de la app
@Injectable({providedIn: 'root'})
export class DragonballService {
  characterList = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    // Guardo los nuevos characters en localStorage
    // Es buena práctica que los effect solo hagan una tarea
    localStorage.setItem('characters', JSON.stringify(this.characterList()));
  });

  addCharacter = (newCharacter: Character) => {
    this.characterList.update(
      list => [...list, newCharacter]
    );
  }
}