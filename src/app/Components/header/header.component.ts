import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  moon = faMoon;

  ewcLogo = ''
  tantraLogo = '';

  constructor() {}

  toggle() {
    const isLight = document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    this.tantraLogo = isLight ? '../../../assets/tantralogoblack.png' : '../../../assets/tantralogowhite.png';
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
      this.tantraLogo = '../../../assets/tantralogoblack.png';
    } else {
      document.documentElement.classList.remove('light');
      this.tantraLogo = '../../../assets/tantralogowhite.png';
    }
  }
  
  ngOnInit() {
    this.initializeTheme();
  }
}
