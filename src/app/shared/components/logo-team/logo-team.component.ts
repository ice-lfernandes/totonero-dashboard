import { Component, Input, OnInit } from '@angular/core';
import { faCircleInfo, faSave, faStar } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Team } from 'src/app/service/alert/model/team.model';

@Component({
  selector: 'app-logo-team',
  templateUrl: './logo-team.component.html',
  styleUrls: ['./logo-team.component.css']
})
export class LogoTeamComponent implements OnInit {

  @Input() urlLogo: string
  @Input() nameTeam: string
  @Input() team: Team
  @Input() leagueName: string

  faStar = faStar
  faCircleInfo = faCircleInfo
  faSave = faSave

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any, modalId: string) {
    console.log("abri modal")
    this.modalService.open(content, {
      ariaLabelledBy: modalId,
      size: 'xl'
    }).result
  }

}
