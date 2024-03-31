import { Component } from '@angular/core';

@Component({
  selector: 'app-rou1',
  templateUrl: './rou1.component.html',
  styleUrls: ['./rou1.component.css']
})
export class Rou1Component {
  img_url: string = "assets/images/red.jpeg";
  s: boolean = true;
  timer: number = 4000;
  intervalId: any;
  img_url1:string = "assets/images/red1.jpg"

  str:string="Stop your vehicle until the green light appears";
  constructor() {
    this.intervalId = setInterval(() => this.changeLight(), this.timer);
  }

  count:number=0;

countdown(seconds: number) {
    console.log(seconds);
    this.count=seconds;
    if (seconds > 0) {
        setTimeout(() => this.countdown(seconds - 1), 1000);
    }
}
 

  changeLight() {

    if (this.img_url === "assets/images/red.jpeg") {
      this.img_url = "assets/images/yellow.jpeg";
      this.countdown(3);
      this.str = "Prepare to proceed with caution,the signal is transitioning to green";
    } else if (this.img_url === "assets/images/yellow.jpeg") {
      this.img_url = "assets/images/green.jpeg";
      this.str = "You may proceed, the road is clear";
      this.countdown(3);
    } else {
      this.img_url = "assets/images/red.jpeg";
      this.str = "Stop your vehicle until the green light appears";
      this.countdown(3);
    }

   
    if (this.img_url === "assets/images/red.jpeg") {
      this.img_url1 = "assets/images/red1.jpg";
      this.str = "Stop your vehicle until the green light appears";
      this.countdown(3);
    } else if (this.img_url === "assets/images/yellow.jpeg") {
      this.img_url1 = "assets/images/yellow1.jpg";
      this.str = "Prepare to proceed with caution,the signal is transitioning to green"; 
      this.countdown(3);
    } else {
      this.img_url1 = "assets/images/green1.jpg";
      this.str = "You may proceed, the road is clear"; 
      this.countdown(3);
    }
}
}