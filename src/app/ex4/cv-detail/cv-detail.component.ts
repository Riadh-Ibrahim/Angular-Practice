import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../cv';
import { CvService } from 'src/app/services/cv-service';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from 'src/app/services/embauche-service.service';
import { RoutesConfig } from 'src/app/config/routes.config';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  cv!: Cv | null;

  constructor(
    private cvService: CvService,
    private acr: ActivatedRoute,
    private router: Router,
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {
    const id = this.acr.snapshot.params['id'];
    this.cv = this.cvService.getCvById(id);
    if (!this.cv)
      this.router.navigate([RoutesConfig.EX4]);
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCvapi(this.cv.id).subscribe({
        next: (response) => {
          console.log('CV deleted from API', response);
          this.embaucheService.deleteCv(this.cv!);
          this.router.navigate([RoutesConfig.EX4]);
        },
        error: (error) => {
          console.error('Error deleting CV from API', error);
          this.toastr.error('API not available. Deleting CV locally.');

          if (this.cvService.deleteCv(this.cv!)) {
            this.embaucheService.deleteCv(this.cv!);
            this.router.navigate([RoutesConfig.EX4]);
          } else {
            this.toastr.error('Error: CV not found in local data.');
          }
        }
      });
    } 
  }
}
