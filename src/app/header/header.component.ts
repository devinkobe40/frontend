import { Component, OnInit } from '@angular/core';
import { faTimesCircle as faTimesCircleReg } from '@fortawesome/free-regular-svg-icons';
import { faTimesCircle as faTimesCircleSol } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { LoginComponent } from '../login/login.component';

import { SpeciesService } from '../services/species.service';
import { Result } from '../interfaces/result';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // icons
  faTimesCircleReg = faTimesCircleReg;
  faTimesCircleSol = faTimesCircleSol;
  faSignIn = faSignInAlt;
  faLeaf = faLeaf;

  constructor(
    private dialog: MatDialog,
    private speciesService: SpeciesService
  ) { }

  ngOnInit(): void {
  }

  openLoginForm(): void {
    this.dialog.open(LoginComponent, {width:'500px', height:'450px'});
  }

}
