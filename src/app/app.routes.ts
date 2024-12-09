import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ToolsComponent } from './tools/tools.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },        // Povezuje HomeComponent sa početnom rutom
  { path: 'about', component: AboutComponent },   // Povezuje AboutComponent sa '/about' rutom
  { path: 'tools', component: ToolsComponent },   // Povezuje ToolsComponent sa '/tools' rutom
];
