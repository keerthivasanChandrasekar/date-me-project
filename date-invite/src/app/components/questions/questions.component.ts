import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {
  favoritePlace: string = '';
  favoriteFood: string = '';
  romanticMoment: string = '';

  constructor(private router: Router) { }

  sendEmail() {
    const emailParams = {
      favoritePlace: this.favoritePlace,
      favoriteFood: this.favoriteFood,
      romanticMoment: this.romanticMoment,
    };

    emailjs.send('service_eedryii', 'template_g7k08ae', emailParams, 'LlcfCB9d9Sh_M8kBT')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }

  goToFinalQuestion() {
    localStorage.setItem('favoritePlace', this.favoritePlace);
    localStorage.setItem('favoriteFood', this.favoriteFood);
    localStorage.setItem('romanticMoment', this.romanticMoment);

    this.sendEmail(); // Send email before navigating
    this.router.navigate(['/final-question']);
  }

  /**
   * Updates selection and applies `selected` class to the correct label
   */
  selectOption(questionClass: string, value: string) {
    if (questionClass === 'Question_One') {
      this.favoritePlace = value;
    } else if (questionClass === 'Question_Two') {
      this.favoriteFood = value;
    }

    // Remove 'selected' class from all labels in the given question class
    const labels = document.querySelectorAll(`.${questionClass} label`);
    labels.forEach(label => label.classList.remove('selected'));

    // Find the selected input and add the 'selected' class to its label
    const selectedInput = document.querySelector(`.${questionClass} input[value="${value}"]`);
    if (selectedInput) {
      selectedInput.parentElement?.classList.add('selected');
    }
  }
}
