import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-setting',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './nav-setting.component.html',
  styleUrl: './nav-setting.component.scss'
})
export class NavSettingComponent {
@Input() navDark:any
}
