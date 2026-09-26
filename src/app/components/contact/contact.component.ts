import {
  Component,
  signal
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  currentYear = new Date().getFullYear();

  isSending = signal(false);
  messageSent = signal(false);
  sendError = signal(false);

  contactForm: FormGroup;


  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({

      name: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      subject: [
        '',
        Validators.required
      ],

      message: [
        '',
        Validators.required
      ]

    });

  }


  async sendMessage(): Promise<void> {

    if (this.contactForm.invalid) {

      this.contactForm.markAllAsTouched();

      return;
    }


    this.isSending.set(true);

    this.messageSent.set(false);

    this.sendError.set(false);


    try {

      const response = await fetch(
        'https://formspree.io/f/mppwyodp',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },

          body: JSON.stringify(
            this.contactForm.value
          )
        }
      );


      if (!response.ok) {
        throw new Error('Message could not be sent');
      }


      this.messageSent.set(true);

      this.contactForm.reset();

    }
    catch (error) {

      console.error(
        'Contact form error:',
        error
      );

      this.sendError.set(true);

    }
    finally {

      this.isSending.set(false);

    }

  }

}