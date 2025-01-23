import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookings-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings-list.component.html',
  styleUrl: './bookings-list.component.scss'
})
export class BookingsListComponent {


  @Input() isMobile!:boolean;

  state = {
    title: 'ვიზიტი კლინიკაში დაჯავშნილია',
    sub_title: 'ჯავშნის შესახებ ინფორმაცია გამოგეგზავნებათ მითითებულ ნომერსა და ელ.ფოსტაზე',
    bookings: [
      {
        status: 'approved',
        doctor: {
          name: 'ნინო ოქროპირიძე',
          specialisation: 'ოტორინოლარინგოლოგი'
        },
        clinic: {
          name: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
          address: '16 ალექსანდრე ყაზბეგის გამზირი'
        },
        visitTime: {
          startTime: '11:00',
          endTime: '11:20',
          day: '23 ივლისი'
        }
      },
      {
        status: 'approved',
        doctor: {
          name: 'ნინო ოქროპირიძე',
          specialisation: 'ოტორინოლარინგოლოგი'
        },
        clinic: {
          name: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
          address: '16 ალექსანდრე ყაზბეგის გამზირი'
        },
        visitTime: {
          startTime: '11:00',
          endTime: '11:20',
          day: '23 ივლისი'
        }
      },
      {
        status: 'approved',
        doctor: {
          name: 'ნინო ოქროპირიძე',
          specialisation: 'ოტორინოლარინგოლოგი'
        },
        clinic: {
          name: 'მედალფა - შპს აკადემიკოს ვახტანგ ბოჭორიშვილის კლინიკა',
          address: '16 ალექსანდრე ყაზბეგის გამზირი'
        },
        visitTime: {
          startTime: '11:00',
          endTime: '11:20',
          day: '23 ივლისი'
        }
      }
    ],
    patient: {
      name: 'ჟანა გიორგაშვილი',
      policeNumber: 'OPPMED 5029382/20',
      number: '551 65 54 32',
      mail: 'janagiorgashvili@gmail.com'
    },
    buttons: [
      { text: 'მთავარზე დაბრუნება', route: 'main' , type: 'main' }
    ]
  }
}
