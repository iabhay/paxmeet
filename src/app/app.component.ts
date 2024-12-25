import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SingleNavbarComponent } from './components/single-navbar/single-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SingleNavbarComponent, FooterComponent, ScrollToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'Paxmeet';
}
