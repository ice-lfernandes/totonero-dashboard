import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-button-card',
  templateUrl: './button-card.component.html',
  styleUrls: ['./button-card.component.css']
})
export class ButtonCardComponent implements OnInit {

  @Input() function: Function
  @Input() action: string
  @Input() icon: IconDefinition

  constructor() { }

  ngOnInit(): void {
  }

}
