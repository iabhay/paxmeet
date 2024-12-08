import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-upload-item',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ],
  templateUrl: './upload-item.component.html',
  styleUrl: './upload-item.component.scss'
})
export class UploadItemComponent {
  file:any

  handleChange(e:any){
    e.preventDefault();
    this.file = URL.createObjectURL(e.target.files[0])
    console.log(this.file);
    
  }
}
