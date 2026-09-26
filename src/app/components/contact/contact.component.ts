import { Component } from '@angular/core';
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

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });

  }


  sendMessage(): void {

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const {
      name,
      email,
      subject,
      message
    } = this.contactForm.value;


    const emailBody =
      `Hi Anam,

My name is ${name}.

${message}

You can reach me at:
${email}`;


    const mailto =
      `mailto:anam.siddiqui.work@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;


    window.location.href = mailto;
  }
}