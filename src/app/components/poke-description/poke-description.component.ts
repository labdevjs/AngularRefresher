import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PokeAPIService } from '../../services/poke-api.service';

@Component({
  selector: 'app-poke-description',
  templateUrl: './poke-description.component.html',
  styleUrls: ['./poke-description.component.scss']
})
export class PokeDescriptionComponent implements OnInit {
  Pokemon: any = [];

  constructor(
    private routeActive: ActivatedRoute,
    private pokeService: PokeAPIService
  ) { }

  ngOnInit(): void {
    const id = this.routeActive.snapshot.paramMap.get('id');

    this.pokeService.getPokemon(id).subscribe( data => {
      this.Pokemon = data;
      console.log(this.Pokemon);
    });
    console.log(id);
  }

}
