import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';
import { TopCollectionComponent } from "../../../components/top-collection/top-collection.component";
import { HotProductComponent } from "../../../components/hot-product/hot-product.component";

import CreatorData from '../../../../data/creator.json'

@Component({
  selector: 'app-creator-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent,
    TopCollectionComponent,
    HotProductComponent
],
  templateUrl: './creator-profile.component.html',
  styleUrl: './creator-profile.component.scss'
})
export class CreatorProfileComponent {
  creatorData = CreatorData;
  id:any
  data:any
  constructor(private router:ActivatedRoute){
    this.id = this.router.snapshot.params['id']
    this.data = this.creatorData.find((item)=> item.id === parseInt(this.id))
  }
}
