import { Component } from '@angular/core';


interface Service {
  number: string;
  icon:
    | 'backend'
    | 'enterprise'
    | 'architecture'
    | 'fullstack'
    | 'data'
    | 'consulting';
  title: string;
  description: string;
}


type SkillCategory =
  | 'All'
  | 'Programming'
  | 'Web'
  | 'Frameworks'
  | 'Build Tools'
  | 'DevOps'
  | 'Databases'
  | 'Design'
  | 'Cloud & Middleware';


interface Skill {
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  icon: string;
}


@Component({
  selector: 'app-services',
  standalone: true,

  // REMOVE FontAwesomeModule
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


  categories: SkillCategory[] = [
    'All',
    'Programming',
    'Web',
    'Frameworks',
    'Build Tools',
    'DevOps',
    'Databases',
    'Design',
    'Cloud & Middleware'
  ];


  selectedCategory: SkillCategory = 'All';


  skills: Skill[] = [

    {
      name: 'Java',
      category: 'Programming',
      icon: 'fa-brands fa-java'
    },

    {
      name: 'Python',
      category: 'Programming',
      icon: 'fa-brands fa-python'
    },

    {
      name: 'HTML',
      category: 'Web',
      icon: 'fa-brands fa-html5'
    },

    {
      name: 'CSS',
      category: 'Web',
      icon: 'fa-brands fa-css3-alt'
    },

    {
      name: 'Spring Boot',
      category: 'Frameworks',
      icon: 'fa-solid fa-leaf'
    },

    {
      name: 'Gradle',
      category: 'Build Tools',
      icon: 'fa-solid fa-hammer'
    },

    {
      name: 'Maven',
      category: 'Build Tools',
      icon: 'fa-solid fa-feather'
    },

    {
      name: 'Jenkins',
      category: 'DevOps',
      icon: 'fa-brands fa-jenkins'
    },

    {
      name: 'JFrog',
      category: 'DevOps',
      icon: 'fa-solid fa-box-open'
    },

    {
      name: 'PostgreSQL',
      category: 'Databases',
      icon: 'fa-solid fa-database'
    },

    {
      name: 'Oracle',
      category: 'Databases',
      icon: 'fa-solid fa-database'
    },

    {
      name: 'Figma',
      category: 'Design',
      icon: 'fa-brands fa-figma'
    },

    {
      name: 'Linux',
      category: 'Cloud & Middleware',
      icon: 'fa-brands fa-linux'
    },

    {
      name: 'Kubernetes',
      category: 'Cloud & Middleware',
      icon: 'fa-solid fa-cubes'
    },

    {
      name: 'Tomcat',
      category: 'Cloud & Middleware',
      icon: 'fa-solid fa-server'
    },

    {
      name: 'Kafka',
      category: 'Cloud & Middleware',
      icon: 'fa-solid fa-diagram-project'
    }

  ];


  get filteredSkills(): Skill[] {

    if (this.selectedCategory === 'All') {
      return this.skills;
    }

    return this.skills.filter(
      skill => skill.category === this.selectedCategory
    );
  }


  selectCategory(category: SkillCategory): void {
    this.selectedCategory = category;
  }

}