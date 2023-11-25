import { PokedexService } from '../services/pokedex.service';
import { PokeAPIService } from '../services/poke-api.service';
import { Component } from '@angular/core';
import { SonhoService } from '../services/sonho.service';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pokemonlist = [];

  verde: any = {};

  vermelho: any = {};

  amarelo: any = {};

  constructor(
    private pokeAPIService: PokeAPIService,
    private SonhoService: SonhoService,
    private pokedexService: PokedexService
  ) {
    this.OnOK()
    this.OnInit()
  }

  OnInit() {
    let ganhou = 5;
    let perdeu = 2;
    let empate = 3;
    let imagem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png';
    this.pokemon.ganhou = ganhou;
    this.pokemon.perdeu = perdeu;
    this.pokemon.empate = empate;
    for (let i = 0; i < this.pokedexService.pokemons.length; i++) {
      this.pokemonlist.push(JSON.parse(this.pokedexService.pokemons[i]));
    }
    this.pokemon.img = imagem;
  }

  OnOK() {
      this.usaCor('green', 'red', 'yellow');
  }
  usaCor(color: string, cor: string, cores: string) {
    this.verde = {
      color: color,
    };
    this.vermelho = {
      color: cor,
    };
    this.amarelo = {
      color: cores,
    };
}

}