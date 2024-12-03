import { Component, Input, OnInit, inject } from '@angular/core';
import { Cv } from "../cv";
import { CvService } from 'src/app/services/cv-service';
import { EmbaucheService } from 'src/app/services/embauche-service.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent  {
  @Input() showedCv: Cv | null = null;

  private embaucheService = inject(EmbaucheService);
  motto = 'To be or not to be, this is my awesome motto!';
  jobDescription = 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...';

  constructor(private cvService : CvService) { }

  embaucher() {
    if (this.showedCv) {
      this.embaucheService.embaucher(this.showedCv)

    }
  }

  ngOnInit(): void {
    this.cvService.cvObservable$.subscribe(
      (cv) => {
        this.showedCv = cv;
      }
    )
  }
}
