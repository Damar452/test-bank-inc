import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-images-carousel',
  templateUrl: './images-carousel.component.html',
  styleUrls: ['./images-carousel.component.scss']
})
export class ImagesCarouselComponent implements OnInit, OnDestroy {

  @Input() products: Product[] = [];
  @Input() intervalTime: number = 1000;
  @Output() onClickImage = new EventEmitter<number>();

  public slideIndex = 0;
  private interval!: TimerHandle;

  constructor() {}

  ngOnInit(): void {
    this.setInterval();
  }

  public showSlide(index: number): void {
    this.slideIndex = index;
  }

  public nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.products.length;
  }

  public prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1 + this.products.length) % this.products.length;
  }

  public clickImage(id: number) {
    this.onClickImage.emit(id)
  }

  private setInterval() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, this.intervalTime);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
