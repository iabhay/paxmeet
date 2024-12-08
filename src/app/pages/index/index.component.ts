import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { ServicesComponent } from '../../components/services/services.component';
import { AboutOneComponent } from '../../components/about-one/about-one.component';
import { AboutTwoComponent } from '../../components/about-two/about-two.component';
import { ClientComponent } from '../../components/client/client.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../components/scroll-to-top/scroll-to-top.component';
import { HomeBannerComponent } from "../../components/home-banner/home-banner.component";
import { HotProductComponent } from "../../components/hot-product/hot-product.component";
import { CtaTwoComponent } from "../../components/cta-two/cta-two.component";
import { FaqComponent } from "../../components/faq/faq.component";
import { TopCollectionComponent } from "../../components/top-collection/top-collection.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    ServicesComponent,
    AboutOneComponent,
    AboutTwoComponent,
    ClientComponent,
    BlogComponent,
    FooterComponent,
    ScrollToTopComponent,
    HomeBannerComponent,
    HotProductComponent,
    CtaTwoComponent,
    FaqComponent,
    TopCollectionComponent,
],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
