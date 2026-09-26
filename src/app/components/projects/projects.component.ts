import { Component } from '@angular/core';

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  skills: string[];
  privateProject: boolean;
  github?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      number: '01',
      title: 'Bank of America',
      subtitle: 'Enterprise Data Processing Platform',
      category: 'Professional Work',
      description:
        'Contributed to enterprise data-management and processing applications, building and enhancing backend functionality for complex financial-data workflows.',
      highlights: [
        'Built a REST API for Excel ingestion and transformation into structured .prep files.',
        'Enhanced configurable validation, reporting, field mappings and financial-data processing.',
        'Worked on FOSS remediation, dependency upgrades and application compatibility.',
        'Supported deployment and troubleshooting across Linux, JBoss, Jenkins and SFTP environments.'
      ],
      skills: [
        'Java',
        'Spring Boot',
        'REST APIs',
        'Oracle SQL',
        'Maven',
        'Jenkins',
        'Linux'
      ],
      privateProject: true
    },

    {
      number: '02',
      title: 'FlexxCode',
      subtitle: 'Digital Lending & Decisioning Platform',
      category: 'Professional Work',
      description:
        'Developed a configurable digital lending platform supporting Retail and MSME loan journeys with workflow-driven architecture and real-time credit decisioning.',
      highlights: [
        'Built configurable workflow-driven loan journeys.',
        'Developed eligibility, scoring and policy-based decision engines.',
        'Integrated bureau, KYC and external verification services.',
        'Built AI-assisted Credit Analysis Memorandum generation.'
      ],
      skills: [
        'Java 21',
        'Spring Boot',
        'Angular',
        'Gradle',
        'Kafka',
        'Kubernetes',
        'MariaDB'
      ],
      privateProject: true
    },

    {
      number: '03',
      title: 'One Origination',
      subtitle: 'Commercial & Retail Lending Platform',
      category: 'Professional Work',
      description:
        'Worked on a banking platform that streamlines loan origination, processing and monitoring across commercial and retail lending.',
      highlights: [
        'Contributed to lending workflows across the loan lifecycle.',
        'Worked on backend services and Angular-based application flows.',
        'Supported enterprise integrations and deployment pipelines.'
      ],
      skills: [
        'Spring Boot',
        'Angular',
        'Gradle',
        'Jenkins',
        'Tomcat',
        'Kafka',
        'Kubernetes',
        'Oracle'
      ],
      privateProject: true
    },

    {
      number: '04',
      title: 'HDFC',
      subtitle: 'Corporate Lending Platform',
      category: 'Professional Work',
      description:
        'Contributed to a corporate lending solution enabling users and banking teams to manage loan requests from initiation through evaluation and approval.',
      highlights: [
        'Worked on corporate lending workflows and application modules.',
        'Developed backend services and frontend integrations.',
        'Supported database-driven processing and enterprise deployments.'
      ],
      skills: [
        'Spring Boot',
        'Angular',
        'Gradle',
        'Jenkins',
        'Tomcat',
        'Kafka',
        'Kubernetes',
        'Oracle',
        'PostgreSQL'
      ],
      privateProject: true
    },

    {
      number: '05',
      title: 'Portfolio',
      subtitle: 'Personal Developer Portfolio',
      category: 'Personal Project',
      description:
        'Designed and developed a responsive developer portfolio focused on presenting technical capabilities, experience and selected project case studies.',
      highlights: [
        'Built using reusable standalone Angular components.',
        'Designed a responsive black-and-white visual system.',
        'Implemented smooth navigation and modular project sections.'
      ],
      skills: [
        'Angular',
        'TypeScript',
        'SCSS'
      ],
      privateProject: false,
      github: 'https://github.com/Siddiqui-Anam/anam-siddiqui-portfolio'
    }
  ];
}
