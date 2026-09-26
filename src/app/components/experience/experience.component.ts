import { Component } from '@angular/core';

interface Experience {

  role: string;
  company: string;
  location: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  skills: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Software Engineer II',
      company: 'Tata Consultancy Services',
      location: 'Mumbai, India',
      employmentType: 'Full-Time',
      startDate: 'MAY 2026',
      endDate: 'PRESENT',
      responsibilities: [
        'Working on enterprise banking applications for Bank of America.',
        'Handling backend enhancements, validation logic, report processing, DB scripts, and file-processing flows.',
        'Contributing to Java/Spring upgrades, FOSS remediation, server migration analysis, and production issue resolution.'
      ],
      skills: [
        'Java',
        'Spring Boot',
        'SQL',
        'Maven',
        'Jenkins',
        'Linux'
      ]
    },

    {
      role: 'Software Engineer',
      company: 'Digital Deer Solutions Pvt. Ltd.',
      location: 'Mumbai, India',
      employmentType: 'Full-Time',
      startDate: 'MAY 2025',
      endDate: 'MAR 2026',
      responsibilities: [
        'Built scalable backend services using Java and Spring Boot.',
        'Designed configurable workflow-driven systems using dynamic JSON.',
        'Developed decision-processing systems for eligibility, scoring, and business logic.'
      ],
      skills: [
        'Java',
        'Spring Boot',
        'Angular',
        'MariaDB',
        'Docker',
        'Kubernetes'
      ]
    },

    {
      role: 'Product Engineer',
      company: 'Intellect Design Arena Ltd.',
      location: 'Mumbai, India',
      employmentType: 'Full-Time',
      startDate: 'APR 2022',
      endDate: 'MAY 2025',
      responsibilities: [
        'Worked on commercial and retail lending platforms for banking clients.',
        'Built and enhanced origination, disbursement, renewal, collateral, and covenant-related features.',
        'Developed and maintained backend services, APIs, and database-driven modules.'
      ],
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'SQL',
        'Banking'
      ]
    }
  ];
}
