import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './characte/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public page! :number

  constructor(private characterSvc: CharactersApiService) { }
  allCharacters!: Observable<any>;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
}