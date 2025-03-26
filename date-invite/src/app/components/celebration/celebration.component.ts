import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-celebration',
  standalone: true,
  templateUrl: './celebration.component.html',
  styleUrls: ['./celebration.component.css']
})
export class CelebrationComponent implements OnInit {
  favoritePlace: string = '';
  favoriteFood: string = '';
  romanticMoment: string = '';
  hearts: any[] = new Array(20); // Creates floating hearts

  constructor(private router: Router) { }

  ngOnInit() {
    // Retrieve answers from localStorage
    this.favoritePlace = localStorage.getItem('favoritePlace') || 'a surprise place';
    this.favoriteFood = localStorage.getItem('favoriteFood') || 'delicious food';
    this.romanticMoment = localStorage.getItem('romanticMoment') || 'a magical moment';
  }

  restart() {
    this.router.navigate(['/']); // Restart the flow
  }
}
