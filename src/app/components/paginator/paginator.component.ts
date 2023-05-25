import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() pageIndex: number = 0;

  @Output() pageIndexChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPrevPage() {
    if (this.pageIndex > 0) {
      this.pageIndex--;
      this.pageIndexChanged.emit(this.pageIndex);
    }
  }

  onNextPage() {
    this.pageIndex++;
    this.pageIndexChanged.emit(this.pageIndex);
  }

}
