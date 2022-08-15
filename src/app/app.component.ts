import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



  secondPosition = 0;
  minutePosition = 0;
  hourPosotion = 0;
  dateTime = {

    years: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: ''
  }



  counter !: Subscription;

  ngOnInit() {

    this.startClock();
  }

  startClock() {

    this.counter = timer(0, 1000).subscribe((res) => {
      let date = new Date();

      let second = date.getSeconds();

      let minute = date.getMinutes();

      let hour = date.getHours();


      let day = date.getDate();

      let month = date.getMonth() + 1;

      let year = date.getFullYear();

      this.dateTime.years = year.toString();
      this.dateTime.month = this.displayDoubleDigit(month);
      this.dateTime.day = this.displayDoubleDigit(day);

      this.dateTime.hour = this.displayDoubleDigit(hour);
      this.dateTime.minute = this.displayDoubleDigit(minute);
      this.dateTime.second = this.displayDoubleDigit(second);
    



      this.secondPosition = second * 6;
      this.minutePosition = minute * 6;
      this.hourPosotion = (hour > 11 ? hour - 12 : hour) * 30 + Math.floor(minute / 12) * 6;


    });

  }

displayDoubleDigit(value : number) : string{

return ('00'+ value).slice(-2)

}

}
