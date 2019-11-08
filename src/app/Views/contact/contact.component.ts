import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../Services/contact.service';
import {ContactMethod} from '../../Models/ContactMethod';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactGroup: FormGroup;
  contactMethods: ContactMethod[];
  constructor(private formBuilder: FormBuilder,
              private contactService: ContactService) { }

  ngOnInit() {
    this.contactGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      body: ['', Validators.required, Validators.maxLength(300)]
    });
    this.contactService.getContactMethods()
      .then((cm) => this.contactMethods = cm)
      .catch((err) => console.error(err));
  }

}
