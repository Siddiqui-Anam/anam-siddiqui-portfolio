import { Component } from '@angular/core';

interface AboutCard {
  icon: 'code' | 'learn' | 'design' | 'book';
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  cards: AboutCard[] = [
    {
      icon: 'code',
      title: 'Engineering',
      description:
        'Building scalable systems, clean architecture and real-world solutions.'
    },
    {
      icon: 'learn',
      title: 'Always Learning',
      description:
        'Exploring new technologies and constantly improving my skills.'
    },
    {
      icon: 'design',
      title: 'Design Mindset',
      description:
        'I enjoy creating clean, intuitive and thoughtful user experiences.'
    },
    {
      icon: 'book',
      title: 'Reader & Writer',
      description:
        'I write fiction on Wattpad and love getting lost in good books.'
    }
  ];

}
