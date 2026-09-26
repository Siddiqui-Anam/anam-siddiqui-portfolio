import {
  Component,
  HostListener,
  signal
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  menuOpen = signal(false);

  activeSection = signal('home');

  private sectionIds = [
    'home',
    'work',
    'services',
    'experience',
    'about',
    'contact'
  ];


  toggleMenu(): void {
    this.menuOpen.update(value => !value);
  }


  closeMenu(): void {
    this.menuOpen.set(false);
  }


  setActive(section: string): void {
    this.activeSection.set(section);
    this.closeMenu();
  }


  @HostListener('window:scroll')
  onScroll(): void {

    const offset = 160;

    let currentSection = 'home';

    for (const id of this.sectionIds) {

      const element = document.getElementById(id);

      if (!element) {
        continue;
      }

      const sectionTop =
        element.getBoundingClientRect().top +
        window.scrollY;

      if (window.scrollY + offset >= sectionTop) {
        currentSection = id;
      }
    }

    this.activeSection.set(currentSection);
  }

}