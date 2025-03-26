import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final-question',
  standalone: true,
  templateUrl: './final-question.component.html',
  styleUrls: ['./final-question.component.css']
})
export class FinalQuestionComponent {
  @ViewChild('noButton') noButton!: ElementRef;

  constructor(private router: Router) { }

  goToCelebration() {
    this.router.navigate(['/celebration']);
  }

  // moveNoButton() {
  //   const button = this.noButton.nativeElement;
  //   const buttonWidth = button.offsetWidth;
  //   const buttonHeight = button.offsetHeight;

  //   // Get screen boundaries
  //   const maxX = window.innerWidth - buttonWidth - 20; // Prevents going off right edge
  //   const maxY = window.innerHeight - buttonHeight - 20; // Prevents going off bottom edge
  //   const minX = 20; // Prevents going off left edge
  //   const minY = 20; // Prevents going off top edge

  //   // Generate a new random position within safe boundaries
  //   const randomX = Math.random() * (maxX - minX) + minX;
  //   const randomY = Math.random() * (maxY - minY) + minY;

  //   button.style.position = 'absolute';
  //   button.style.left = `${randomX}px`;
  //   button.style.top = `${randomY}px`;
  // }
  moveNoButton() {
    const button = this.noButton.nativeElement;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Get the current button position
    const currentX = button.offsetLeft;
    const currentY = button.offsetTop;

    // Define screen boundaries with some padding
    const maxX = window.innerWidth - buttonWidth - 30; // Prevents it from going off the right edge
    const maxY = window.innerHeight - buttonHeight - 30; // Prevents it from going off the bottom edge
    const minX = 30; // Prevents it from going off the left edge
    const minY = 30; // Prevents it from going off the top edge

    // Generate new position by adding a random shift but keeping it within boundaries
    let randomX = currentX + (Math.random() * 300 - 100); // Moves between -100px and +100px
    let randomY = currentY + (Math.random() * 300 - 100);

    // Ensure the new position is within bounds
    randomX = Math.max(minX, Math.min(randomX, maxX));
    randomY = Math.max(minY, Math.min(randomY, maxY));

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  }


}
