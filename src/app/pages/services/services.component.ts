import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { TeamComponent } from '../../components/team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    CtaComponent,
    TeamComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
    {
      icon:'aperture' ,
      title:'Branding Strategy',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    },
    {
      icon:'send' ,
      title:'Digital Solutions',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    },
    {
      icon:'users' ,
      title:'Social Media',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    },
    {
      icon:'star' ,
      title:'Insightful Analytics',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    },
    {
      icon:'bookmark' ,
      title:'Business Consultation',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    },
    {
      icon:'message-circle' ,
      title:'24/7 Support',
      desc:"Welcome to the future, you can explore and use awesome agents form here. The world largest digital marketplace for AI Agents."
    }
  ]
}
