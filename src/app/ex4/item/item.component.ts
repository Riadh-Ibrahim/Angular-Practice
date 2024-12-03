import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Cv} from "../cv";
import { CvService } from 'src/app/services/cv-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {
  @Input() cv! : Cv;
  constructor(private cvService: CvService) { }

  onClick(cv: Cv){
    this.cvService.showCv(this.cv);
  }
}
