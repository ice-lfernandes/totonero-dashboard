import { Component, OnInit } from '@angular/core';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

faCircleUser = faCircleUser

constructor() { }

ngOnInit(): void {
}

}
