import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MatCardModule],
})
export class MainComponent implements OnInit {
  titles = [
    'assets/images/flag1.svg',
    'assets/images/flag2.svg',
    'assets/images/flag3.svg',
    'assets/images/flag4.svg',
    'assets/images/flag5.svg',
    'assets/images/flag6.svg',
    'assets/images/flag7.svg',
    'assets/images/flag8.svg',
    'assets/images/flag9.svg',
  ];

  constructor() {}

  ngOnInit(): void {
    const startAngle = Math.PI / this.titles.length;
    let angle;
    const radius = 110;
    const offset = window.innerWidth / 2;
    if (this.titles.length >= 9) {
      angle = (startAngle / 2) * this.titles.length + 0.2;
    } else if (this.titles.length === 3) {
      angle = (startAngle / 2) * this.titles.length + 0.5;
    } else if (this.titles.length === 2) {
      angle = (startAngle / 2) * this.titles.length + 0.8;
    } else if (this.titles.length === 1) {
      angle = (startAngle / 2) * this.titles.length + 1.6;
    } else {
      angle = (startAngle / 2) * this.titles.length + 0.3;
    }

    for (let i = 0; i < this.titles.length; i++) {
      const flagImg = document.createElement('img');
      flagImg.className = 'flag-img';
      flagImg.src = this.titles[i];
      flagImg.innerHTML = flagImg.src[i];
      flagImg.style.left = radius * Math.cos(angle) + offset / 7.9 + 'px';
      flagImg.style.top = radius * Math.sin(angle) + 'px';
      document.body
        .getElementsByClassName('flags-container')[0]
        .appendChild(flagImg);
      angle += startAngle;
    }
  }
}
