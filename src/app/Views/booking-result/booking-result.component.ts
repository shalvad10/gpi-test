import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookingState } from '../../interfaces';

@Component({
  selector: 'app-booking-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-result.component.html',
  styleUrl: './booking-result.component.scss'
})
export class BookingResultComponent {

  @Input() isMobile?: boolean;

  state: BookingState = {
    result: 'failed',
    title: 'სამწუხაროდ ვიზიტი ვერ დაიჯავშნა',
    sub_title: 'მომხმარებელს ვეუბნებით რა უნდა ქნას რომ დაჯავშნოს ვიზიტი',
    details: {},
    buttons: [
      { text: 'მთავარზე დაბრუნება', route: 'main', type: 'secondary' },
      { text: 'თავიდან ცდა', route: 'main' , type: 'main' }
    ]
  }

  state1: BookingState = {
    result: 'success',
    title: 'ვიზიტი კლინიკაში დაჯავშნილია',
    sub_title: 'ჯავშნის შესახებ ინფორმაცია გამოგეგზავნებათ მითითებულ ნომერსა და ელ.ფოსტაზე',
    details: {
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
      },
      patient: {
        name: 'ჟანა გიორგაშვილი',
        policeNumber: 'OPPMED 5029382/20',
        number: '551 65 54 32',
        mail: 'janagiorgashvili@gmail.com'
      }
    },
    buttons: [
      { text: 'ჩემი ჯავშნები', route: 'my-bookings', type: 'secondary' },
      { text: 'მთავარზე დაბრუნება', route: 'main' , type: 'main' }
    ]
  }
}
