import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";
import { CvService} from 'src/app/services/cv-service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent  {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [];

  constructor(private cvService: CvService) { }

  // ngOnInit() {
  //   this.cvService.getCvsfromapi().subscribe(
  //     (cvs: Cv[]) => {
  //       this.cvs = cvs;
  //     },
  //     error => console.error(error)
  //   );
  // }

  ngOnInit() {
    this.cvService.getCvsfromapi().subscribe({
      next: (cvs: Cv[]) => {
        this.cvs = cvs;
      },
      error: error => {
        console.error('Error fetching CVs:', error);
      },
      complete: () => {
        console.log('Ye Riadh Fetching CVs completed');
      }
    });
  }  

  showDetails(selectedCv: Cv) {
    this.selectedCv = this.cvs.find((cv) => cv === selectedCv) || null;
  }
}
