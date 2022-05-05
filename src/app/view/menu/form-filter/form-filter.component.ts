import { Component, OnInit } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {

  // icones
  faFilter = faFilter
  faSearch = faSearch

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any, modalId: string) {
    this.modalService.open(content, {
      ariaLabelledBy: modalId,
      size: 'xl'
    }).result
  }

}
