import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "./Pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tantra-hill';

  constructor() {}
}
