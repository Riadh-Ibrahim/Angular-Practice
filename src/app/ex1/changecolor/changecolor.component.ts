import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-changecolor',
  templateUrl: './changecolor.component.html',
  styleUrls: ['./changecolor.component.css']
})
export class ChangecolorComponent {


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  
    currentColor: string = 'red';
  
    
    onColorChange(color: string): void {
      this.currentColor = color;
    }
  
  
    resetColor(): void {
      this.currentColor = 'red';
    }
}