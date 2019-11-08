import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  mini = false;
  links: Link[] = [
    {
      name: 'My Portfolio',
      link: 'portfolio',
      icon: 'code'
    },
    {
      name: 'Contact',
      link: 'contact',
      icon: 'contacts'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

class Link {
  name: string;
  link: string;
  icon: string;
}
