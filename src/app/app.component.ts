import { Component, OnInit } from '@angular/core';
import { IData } from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  showCard = true;

  index = 0;

  appComponentData: IData[] = [
    {
      id: 1,
      title: 'Title1',
      description: 'Desc1',
    },
    {
      id: 2,
      title: 'Title2',
      description: 'Desc2',
    },
    {
      id: 3,
      title: 'Title3',
      description: 'Desc3',
    },
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.showCard = false;
    }, 10000);
    setTimeout(() => {
      this.index = 2;
    }, 3000);
  }

  handleTimeOut(data: boolean) {
    // console.log('timeout', data);
  }
}
