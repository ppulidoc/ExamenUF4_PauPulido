import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-inici-pau-pulido',
  templateUrl: './inici-pau-pulido.component.html',
  styleUrls: ['./inici-pau-pulido.component.css']
})
export class IniciPauPulidoComponent {
  berryId: number = 0;
  berry: any = null;
  esDols: boolean = false;

  searchBerry() {
    this.fetchBerryData(this.berryId)
      .then((berryData: any) => {
        const potency = berryData.natural_gift_power;
        this.berry = {
          name: berryData.name
        };

        if (potency > 0) {
          this.esDols = true;
        } else {
          this.esDols = false;
        }
      })
      .catch(() => {
        this.berry = null;
        this.esDols = false;
        console.log('Error al obtener datos de la API de PokeAPI');
      });
  }

  fetchBerryData(berryId: number) {
    return new Promise((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/berry/${berryId}/`)
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch(() => {
          reject();
        });
    });
  }


}
