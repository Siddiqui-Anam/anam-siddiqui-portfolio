import { Component } from '@angular/core';

interface Service {
  number: string;
  icon: 'backend' | 'enterprise' | 'architecture' | 'fullstack' | 'data' | 'consulting';
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      number: '01',
      icon: 'backend',
      title: 'Backend Development',
      description:
        'Designing and building scalable, secure and high-performance APIs and microservices using Java and Spring Boot.'
    },
    {
      number: '02',
      icon: 'enterprise',
      title: 'Enterprise Applications',
      description:
        'Developing robust workflow-driven applications for fintech, banking and business domains with clean architecture.'
    },
    {
      number: '03',
      icon: 'architecture',
      title: 'System Design & Architecture',
      description:
        'Designing scalable systems, integrations and data-driven solutions focused on reliability and maintainability.'
    },
    {
      number: '04',
      icon: 'fullstack',
      title: 'Full-Stack Development',
      description:
        'Building complete applications with Angular frontend and Spring Boot backend, from interface to deployment.'
    },
    {
      number: '05',
      icon: 'data',
      title: 'Data & Reporting Solutions',
      description:
        'Working with relational databases, complex queries, data processing and configurable reporting workflows.'
    },
    {
      number: '06',
      icon: 'consulting',
      title: 'Technical Collaboration',
      description:
        'Understanding business requirements, proposing technical solutions and collaborating to turn ideas into working products.'
    }
  ];
}
