import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }
  
  
  public listPokemons:any[] = []
  
  
  public setPokemons(name: string, image: string, derrotas:number, vitorias:number, empates:number) {
    //if(name == (this.listPokemons[this.listPokemons.length-1].name)){
    //  this.listPokemons.shift()
    //}
    this.listPokemons.push({name:name, image:image, derrotas:derrotas,vitorias:vitorias, empates:empates })
    
  }
  public getPokemons() {
    return this.listPokemons
  }
}
