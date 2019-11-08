import { Component, OnInit } from '@angular/core';
import {PortfolioItem} from '../../Models/PortfolioItem';
import {PortfolioService} from '../../Services/portfolio.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  items: PortfolioItem[];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getProjects()
      .then((items) => this.items = items)
      .catch((err) => console.error(err));
  }

}
