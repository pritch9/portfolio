import {Component, Input, OnInit} from '@angular/core';
import {PortfolioItem} from '../../../Models/PortfolioItem';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input('model') model: PortfolioItem;
  constructor() { }

  multipleDates = false;

  ngOnInit() {
    if (this.model.year.length > 1) {
      this.multipleDates = true;
    }
  }

}
