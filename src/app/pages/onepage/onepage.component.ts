import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild  } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SingleNavbarComponent } from '../../components/single-navbar/single-navbar.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AddEventComponent } from '../../components/add-event/add-event.component';
import { AboutOneComponent } from '../../components/about-one/about-one.component';
import { AboutTwoComponent } from '../../components/about-two/about-two.component';
import { PriceComponent } from '../../components/price/price.component';
import { ClientComponent } from '../../components/client/client.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { HomeBannerComponent } from '../../components/home-banner/home-banner.component';
import { HotProductComponent } from "../../components/hot-product/hot-product.component";
import { CtaTwoComponent } from "../../components/cta-two/cta-two.component";
import { TopCollectionComponent } from "../../components/top-collection/top-collection.component";
import { FaqComponent } from "../../components/faq/faq.component";

import CreatorData from '../../../data/creator.json'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-onepage',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    SingleNavbarComponent,
    ServicesComponent,
    AboutOneComponent,
    AddEventComponent,
    AboutTwoComponent,
    PriceComponent,
    ClientComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    ScrollToTopComponent,
    HomeBannerComponent,
    HotProductComponent,
    CtaTwoComponent,
    TopCollectionComponent,
    FaqComponent
],
  templateUrl: './onepage.component.html',
  styleUrl: './onepage.component.scss'
})
export class OnepageComponent {
  creatorData = CreatorData

}
