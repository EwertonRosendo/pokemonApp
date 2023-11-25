import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }
  public pokemons: string[] = [];

  public setPokemons(pokemon: string) {
    this.pokemons.push(pokemon)
  }
  public getPokemons() {
    return this.pokemons;
  }
}
