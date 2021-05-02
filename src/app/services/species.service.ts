import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Result } from '../interfaces/result';
import { Plant } from '../interfaces/plant';
import { ResultPlant } from '../interfaces/result-plant';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  speciesUrl = "https://trefle.io/api/v1/species?";
  token = "token=fjRtdj31xOHYYlaAy7lo2q6L9FZbg9P8GtDXueyL654";
  specieUrl = "https://trefle.io/api/v1/species/";
  // https://trefle.io/api/v1/plants?q=strawberry&token=fjRtdj31xOHYYlaAy7lo2q6L9FZbg9P8GtDXueyL654&page=1
  x : RegExp = /(?<=species\?)page=[0-9]*/;
  regex:any = "";
  url = "";
  q:number = 0;

  constructor(
    private http: HttpClient
  ) { }

  getAllSpecies(): Observable<Result> {
    return this.http.get<Result>(this.speciesUrl+this.token);
  }

  getSpecie(id: number):Observable<ResultPlant> {
    this.q = id;
    console.log("get plant:", this.q);

    return this.http.get<ResultPlant>(this.specieUrl+this.q+"?"+this.token);
  }

  nextPage(page: string): Observable<Result> {
    this.regex = this.x.exec(page);

    console.log(this.regex[0]);
    console.log("Link:", this.speciesUrl+this.token + '&' + this.regex[0]);

    this.url = this.speciesUrl+this.token + '&' + this.regex[0];


    return this.http.get<Result>(this.url);
  }

  previousPage(page:string): Observable<Result>{
    this.regex = this.x.exec(page);

    this.url = this.speciesUrl+this.token + '&' + this.regex[0];

    return this.http.get<Result>(this.url);

  }

}
