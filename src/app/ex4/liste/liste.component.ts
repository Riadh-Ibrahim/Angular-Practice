import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from "../cv";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent  {
  @Input() cvs : Cv[] = [];
}
