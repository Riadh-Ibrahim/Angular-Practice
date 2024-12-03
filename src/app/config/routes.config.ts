import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangecolorComponent } from '../ex1/changecolor/changecolor.component';
import { CarteComponent } from '../ex2/carte/carte.component';
import { PereComponent } from '../ex3/pere/pere.component';
import { CvComponent } from '../ex4/cv/cv.component';
import { MiniwordComponent } from '../ex5/miniword/miniword.component';
import { RainbowComponent } from '../ex6/rainbow/rainbow.component';
import { CvDetailComponent } from '../ex4/cv-detail/cv-detail.component';
import { LoginComponent } from '../login/login.component';
import { ImagesComponent } from '../images/images.component';
import { LandingComponent } from '../landing/landing.component';

export const RoutesConfig = {
  Landing : 'landing',
  EX1: 'ex1',
  EX2: 'ex2',
  EX3: 'ex3',
  EX4: 'ex4',
  EX5: 'ex5',
  EX6: 'ex6',
  LOGIN: 'login',
  IMAGES: 'images',
  DEFAULT: '',
  CV: 'ex4',
};

export const AppRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: RoutesConfig.EX1, component: ChangecolorComponent },
  { path: RoutesConfig.EX2, component: CarteComponent },
  { path: RoutesConfig.EX3, component: PereComponent },
  { path: `${RoutesConfig.EX4}`, component: CvComponent },
  { path: `${RoutesConfig.EX4}/:id`, component: CvDetailComponent },
  { path: RoutesConfig.EX5, component: MiniwordComponent },
  { path: RoutesConfig.EX6, component: RainbowComponent },
  { path: RoutesConfig.LOGIN, component: LoginComponent },
  { path: RoutesConfig.IMAGES, component: ImagesComponent }
];