import { Component, OnInit } from '@angular/core';
import { GeneralModalService } from 'src/app/services/utilities/general-modal/general-modal.service';

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss']
})
export class GeneralModalComponent implements OnInit {

  constructor(public generalModalService: GeneralModalService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.generalModalService.hideModal();
  }

}
