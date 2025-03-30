import { Component } from '@angular/core';
import { HeaderComponent } from "../../Components/header/header.component";
import { HeroComponent } from "../../Components/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
