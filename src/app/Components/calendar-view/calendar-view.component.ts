import { Component, OnInit } from '@angular/core';
import { CalendarButtonComponent } from "../calendar-button/calendar-button.component";
import { CalendarItemComponent } from "../calendar-item/calendar-item.component";
import { Calendar } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar-view',
  standalone: true,
  imports: [CommonModule ,CalendarButtonComponent, CalendarItemComponent],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss'
})
export class CalendarViewComponent implements OnInit {

  today: Date = new Date();
  todaysCustomDate!: Calendar;
  displayedDays: Calendar[] = [];
  currentStartDate!: Date;
  disableLeftArrow: boolean = true;

  ngOnInit(): void {
    this.currentStartDate = new Date(this.today);
    this.todaysCustomDate = {
      dayName: this.getDayName(this.today.getDay()),
      monthName: this.getMonthName(this.today.getMonth()),
      dayNum: this.today.getDate(),
      date: this.today
    }
    this.updateDisplayedDays();
  }
  updateDisplayedDays(): void {
    this.displayedDays = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(this.currentStartDate);
      date.setDate(this.currentStartDate.getDate() + i);
      this.displayedDays.push({
        dayName: this.getDayName(date.getDay()),
        monthName: this.getMonthName(date.getMonth()),
        dayNum: date.getDate(),
        date: date
      });
    }
  }

  public getDayName(dayNum: number) {
    return ['კვი','ორშ','სამ','ოთხ','ხუთ','პარ','შაბ'][dayNum];
  }

  public getMonthName(monthNum: number) {
    return ['იან', 'თებ', 'მარ', 'აპრ', 'მაი', 'ივნ', 'ივლ', 'აგვ', 'სექ', 'ოქტ', 'ნოე', 'დეკ'][monthNum];
  }

  nextWeek(): void {
    this.currentStartDate.setDate(this.currentStartDate.getDate() + 7);
    this.updateDisplayedDays();
    this.disableLeftArrow = this.isToday(this.displayedDays[0].date);
  }

  prevWeek(): void {
    if(!this.isToday(this.displayedDays[0].date)) {
      this.currentStartDate.setDate(this.currentStartDate.getDate() - 7);
      this.updateDisplayedDays();
      this.disableLeftArrow = this.isToday(this.displayedDays[0].date);
    }
  }
  public isToday(date: Date): boolean {
    const today = new Date();  
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

}
