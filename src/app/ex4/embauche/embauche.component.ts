import { Component } from '@angular/core';
import {Cv} from "../cv";
import { EmbaucheService } from 'src/app/services/embauche-service.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  cvEmbauche : Cv[]
  constructor(private embaucheService : EmbaucheService) {
    this.cvEmbauche = embaucheService.getList();
  }

  ngOnInit(): void {
  }
}
