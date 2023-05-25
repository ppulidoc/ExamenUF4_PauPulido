import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Pokemon {
  name: string;
  evolvesFrom: string;
  noms: { language: string; name: string }[];
}

@Component({
  selector: 'app-info-pau-pulido',
  templateUrl: './info-pau-pulido.component.html',
  styleUrls: ['./info-pau-pulido.component.css']
})
export class InfoPauPulidoComponent {
  IdDelPokemon: number = 0;
  pokemon: Pokemon | null = null;

  constructor(private http: HttpClient) {}

  buscarPokemon() {
    this.fetchPokemonData(this.IdDelPokemon)
      .then((dadesPokemon: any) => {
        this.pokemon = {
          name: dadesPokemon.name,
          evolvesFrom: dadesPokemon.evolves_from_species?.name || '',
          noms: dadesPokemon.names.map((nameData: any) => ({
            language: nameData.language.name,
            name: nameData.name,
          })),
        };
      })
      .catch(() => {
        this.pokemon = null;
        console.log('Error amb intentar obtenir les dades de la apii');
      });
  }

  fetchPokemonData(pokemonId: number) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          () => {
            reject();
          }
        );
    });
  }
}
