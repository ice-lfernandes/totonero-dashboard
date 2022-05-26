import { Component, OnDestroy, OnInit } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertService } from 'src/app/service/integration/alert/alert-service.service';
import { MatchAlive } from 'src/app/service/integration/alert/match-alive.model';


@Component({
  selector: 'app-table-games',
  templateUrl: './table-games.component.html',
  styleUrls: ['./table-games.component.css']
})
export class TableGamesComponent implements OnInit {

  faTableList = faTableList
  listMatchesAlive: MatchAlive[] = []

  constructor(private modalService: NgbModal, private alertService: AlertService) { }

  ngOnInit(): void {
    
  }

  open(content: any, modalId: string) {
    console.log("abri modal")
    this.modalService.open(content, {
      ariaLabelledBy: modalId,
      size: 'xl'
    }).result
    this.getMatchesAlive()
  }

  private getMatchesAlive() {
    console.log('buscando')
    this.alertService.getMatchesAlive().subscribe((data: MatchAlive[]) => this.listMatchesAlive = data)
    console.log('finalizando')
  }

}
