
export interface TimeSlots {
  startDate: string;
  endDate: string;
}
export interface Specialist {
  name: string;
  specialisation: string;
  clinicName: string;
  clinicAddress: string;
  timeSlots: TimeSlots[];
}
export interface Calendar {
  dayName: string;
  monthName: string;
  dayNum: number;
  date: Date;
}

export interface BookingState {
  result: string;
  title: string;
  sub_title: string;
  details: any;
  buttons: any[]
}