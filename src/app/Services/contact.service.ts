import { Injectable } from '@angular/core';
import {ContactMethod} from '../Models/ContactMethod';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactMethods = [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/wpritcha',
      img: 'http://placehold.it/250x250'
    }
  ];

  constructor() { }

  getContactMethods(): Promise<ContactMethod[]> {
    return Promise.resolve(this.contactMethods);
  }
}
