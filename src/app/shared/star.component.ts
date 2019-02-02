import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  @Input() rating;
  @Output() starsClickd: EventEmitter<string> = new EventEmitter<string>()
  starWidth: number;

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.starsClickd.emit(`The rating ${this.rating} was clicked`)
  }
}
