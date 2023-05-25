import { Injectable } from '@angular/core';
import { ModalParams } from 'src/app/models/modal-params.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralModalService {

  public isShowModal: boolean = false;
  public modalParams!: ModalParams | undefined;

  constructor() { }

  public showModal(params: ModalParams) {
    this.isShowModal = true;
    this.modalParams = params;
  }

  public hideModal() {
    this.isShowModal = false;
    this.modalParams = undefined;
  }
}
