import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-profile-setting',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './profile-setting.component.html',
  styleUrl: './profile-setting.component.scss'
})
export class ProfileSettingComponent {
file:any = 'assets/images/team/1.jpg'

handleChange(e:any){
  e.preventDefault();
  this.file = URL.createObjectURL(e.target.files[0])
  console.log(this.file);
  
}

}
