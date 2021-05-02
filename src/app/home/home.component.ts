import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../services/species.service';
import { ResultPlant } from '../interfaces/result-plant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  featuredPlant = {} as ResultPlant;

  constructor(
    private speciesService: SpeciesService
  ) { }

  ngOnInit(): void {
    this.speciesService.getSpecie(166402).subscribe(
      (featured_plant) => {
        this.featuredPlant = featured_plant;
        console.log(this.featuredPlant);

      }
    )
  }

}
