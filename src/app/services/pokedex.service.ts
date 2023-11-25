import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }
  public name_anterior = ''
  
  public listPokemons:any[] = []
  
  
  public setPokemons(name: string, image: string, derrotas:number, vitorias:number, empates:number) {
    if (this.listPokemons.length == 1){
      this.listPokemons.shift()
    }
    this.listPokemons.push({name:name, image:image, derrotas:derrotas,vitorias:vitorias, empates:empates })
    
  }
  public getPokemons() {
    return this.listPokemons
  }
}
