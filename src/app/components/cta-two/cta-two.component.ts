import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-two',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './cta-two.component.html',
  styleUrl: './cta-two.component.scss'
})
export class CtaTwoComponent {
  data = [
    {
      title:'Join our community: lucna.ai',
      desc:'Welcome to the future, you can buy and sell awesome artworks form here.',
      image:'assets/images/community.png'
    },
    {
      title:'Learn more about us: lucna.ai',
      desc:'Welcome to the future, you can buy and sell awesome artworks form here.',
      image:'assets/images/united.png'
    },
  ]
}
