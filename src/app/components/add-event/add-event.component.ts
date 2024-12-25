import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    CalendarModule
  ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.scss'
})
export class AddEventComponent {
  startDate: Date = new Date();
  endDate: Date = new Date();
  event = "Event Type";
  cityType = "City";
  rangeDates: Date[] | undefined;
  clicked: boolean = false;
  time: Time | undefined;
  eventDescription: string = "Enter your event here!"
  items = ["Concerts", "Festivals", "Conferences", "Workshops", "Parties", "Meetups", "Sports", "Exhibitions","Clubbing", "House Party", "Movies", "Travelling", "Dining", "Cafe Hopping", "Standups", "Others"];
  cities = ["Noida", "Delhi", "Gurgaon", "Agra", "Ghaziabad", "Mathura", "Jaipur", "Ajmer","Bangalore", "Pune", "Mumbai", "Chandigarh", "Amritsar", "Chennai", "Indore", "Others"];
  formGroup: FormGroup | any;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      text: new FormControl()
  });
  }

  handleClick(): void {
    if (this.clicked == false){
      this.clicked = true;
      this.eventDescription = "";
    }
    if (this.clicked == true && this.eventDescription == ""){
      this.eventDescription = "Enter your event here!";
    }
  }

  descriptionChange(event: any): void {
    this.eventDescription = event;
  }

  handleCityType(event: any): void {
    this.cityType = event;
  }

  handleEventType(event: any): void {
    this.event = event;
  }
}
