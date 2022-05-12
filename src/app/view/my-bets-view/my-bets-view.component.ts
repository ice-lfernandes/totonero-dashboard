import { Component, OnInit } from '@angular/core';
import { faMinusCircle, faPlusCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-my-bets-view',
  templateUrl: './my-bets-view.component.html',
  styleUrls: ['./my-bets-view.component.css']
})
export class MyBetsViewComponent implements OnInit {

  faPlusCircle = faPlusCircle
  faSearch = faSearch

  constructor() { }

  ngOnInit(): void {
  }

}
