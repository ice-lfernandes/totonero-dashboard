import { Component, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-black-list-view',
  templateUrl: './register-black-list-view.component.html',
  styleUrls: ['./register-black-list-view.component.css']
})
export class RegisterBlackListViewComponent implements OnInit {

  faCircleInfo = faCircleInfo

  constructor() { }

  ngOnInit(): void {
  }

}
