import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';

import NftData from '../../../../data/nft.json'

@Component({
  selector: 'app-nft-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './nft-detail.component.html',
  styleUrl: './nft-detail.component.scss'
})
export class NftDetailComponent {
  nftData = NftData;
 id:any
 data:any
 constructor(private route: ActivatedRoute) { 
  this.id = route.snapshot.params['id']
  this.data = this.nftData.find((item) => item.id === parseInt(this.id))
 }
}
