import { CharactersApiService } from './../characters/character/shared/characters-api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-search-character-form',
  templateUrl: './search-character-form.component.html',
  styleUrls: ['./search-character-form.component.css']
})
export class SearchCharacterFormComponent implements OnInit {

  @Input()
  search: any;

  constructor(private characterSvc: CharactersApiService) { }
      allCharacters: Observable<any>;
      
      ngOnInit() {
          this.getCharacters();
      }

  getCharacters() {
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
  /*  handleSearch () {
     
    }
    allSearch(){

    } */
 

}
