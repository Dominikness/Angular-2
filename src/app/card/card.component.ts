import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IData } from '../data.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges, OnInit, OnDestroy {
  @Input('data')
  childData?: IData;

  @Output()
  event = new EventEmitter<boolean>();

  constructor() {
    // console.log(this.childData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('init');
    setTimeout(() => {
      this.event.emit(true);
    }, 2000);
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}
