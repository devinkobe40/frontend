import { Component, OnInit } from '@angular/core';
import { SpeciesService } from '../services/species.service';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Result } from '../interfaces/result';
import { Plant } from '../interfaces/plant';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
  animations: [
    trigger('show',[
      transition(':enter', [
        style({
          transform: 'translateY(-100%)',
        }),
        animate('1s')
      ]),
      transition(':leave', [
        style({
          transform: 'translateY(100%)',
        }),
        animate('0.5s')
      ])
    ]),

    trigger('fadeInOut', [
      state('fadeIn',
        style({
          opacity: 1
        })),
      state('fadeOut', style({
        opacity: 0
      })),
      transition('fadeIn => fadeOut', [
        animate('1s')
      ]),
      transition('fadeOut => fadeIn', [
        animate('0.5s')
      ])
    ])

  ]
})
export class SpeciesComponent implements OnInit {

  scrollElem : any = "";
  // results = {} as Result; <-- proper way but some functions wont work
  results : any = ""; // <-- improper way
  paginate:string = "";
  isOpen = true;
  chevronRight = faChevronRight;
  chevronLeft = faChevronLeft;
  plant = {} as Plant;

  x : RegExp = /(?<=species\?page=)[0-9]*/;

  current_page:any = "";
  last_page:any = "";


  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(
    private speciesService: SpeciesService,
   ) {
   }


  ngOnInit(): void {


    this.speciesService.getAllSpecies().subscribe(
      (species) => {

        this.results = species;
        console.log("data:", this.results);

        this.last_page = this.x.exec(this.results.links.last);
        this.current_page = this.x.exec(this.results.links.self);
      }
    )
  }

  nextPage(nxt: string): void {

    this.scrollElem = document.querySelector('#moveTop');
    console.log("data",typeof this.scrollElem);

    this.speciesService.nextPage(nxt).subscribe(
      (species) => {
        this.results = species;
        this.current_page = this.x.exec(this.results.links.self);
        this.scrollElem.scrollIntoView();
      }
    )
    this.paginate = nxt;
    console.log(this.paginate);
    console.log(this.results);


  }

  previousPage(prev: string): void {
    console.log("previous page");
    this.scrollElem = document.querySelector('#moveTop');

    this.speciesService.previousPage(prev).subscribe(
      (species) => {
        this.results = species;
        this.current_page = this.x.exec(this.results.links.self);
        this.scrollElem.scrollIntoView();
      }
    )

    this.paginate = prev;
    console.log(this.paginate);

  }

  plantDetail(id: number): void {
    this.speciesService.getSpecie(id).subscribe(
      (x) => {
        console.log("clicked ",x);
        // console.log("plant:", this.plant);
      }
     )
  }

}
