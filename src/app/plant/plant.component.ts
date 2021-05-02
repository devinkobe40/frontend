import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { SpeciesService } from '../services/species.service';

import { Plant } from '../interfaces/plant';
import { ResultPlant } from '../interfaces/result-plant';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.scss']
})
export class PlantComponent implements OnInit {

  plant = {} as ResultPlant;
  loops:number[] = [1,2,3,4];
  // plant: any = "";

  constructor(
    private speciesService:SpeciesService,
    private route: ActivatedRoute,
    private location: Location
   ) {
   }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    const id =+ this.route.snapshot.paramMap.get('id')!;

    this.speciesService.getSpecie(id).subscribe(
      (id) => {
        this.plant = id;
        console.log("Plant:", this.plant.data);

      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
