import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { Specialist } from './interfaces';
import { Step1Component } from './Views/Steps/step-1/step-1.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, Step1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ოჯახის ექიმთან ჩაწერა';
  public isMobile: boolean = window.innerWidth < 600;

  public specialists: Specialist[] = [
    { 
      name: 'ნინო ოქროპირიძე',
      specialisation: 'ოტორინოლარინგოლოგი',
      clinicName: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      clinicAddress: '16 ალექსანდრე ყაზბეგის გამზირი',
      timeSlots: [
        { startDate: '10:00', endDate: '10:20'},
        { startDate: '10:20', endDate: '10:40'},
        { startDate: '10:40', endDate: '11:00'},
        { startDate: '11:00', endDate: '11:20'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '12:00', endDate: '12:20'}
      ]
    },
    { 
      name: 'მარიამ ქრისტესიაშვილი',
      specialisation: 'ოტორინოლარინგოლოგი',
      clinicName: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
      clinicAddress: '16 ალექსანდრე ყაზბეგის გამზირი',
      timeSlots: [
        { startDate: '10:00', endDate: '10:20'},
        { startDate: '10:20', endDate: '10:40'},
        { startDate: '10:40', endDate: '11:00'},
        { startDate: '11:00', endDate: '11:20'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '12:00', endDate: '12:20'},
        
        { startDate: '12:40', endDate: '10:20'},
        { startDate: '13:20', endDate: '10:40'},
        { startDate: '14:40', endDate: '11:00'},
        { startDate: '11:00', endDate: '11:20'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '12:00', endDate: '12:20'},
        
        { startDate: '10:00', endDate: '10:20'},
        { startDate: '10:20', endDate: '10:40'},
        { startDate: '10:40', endDate: '11:00'},
        { startDate: '11:00', endDate: '11:20'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '11:20', endDate: '11:40'},
        { startDate: '11:40', endDate: '12:00'},
        { startDate: '12:00', endDate: '12:20'}
      ]
    },
  ];

  public bookingDetails: any = {
    
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 600;
      console.warn(this.isMobile)
    })
  }
  
}
