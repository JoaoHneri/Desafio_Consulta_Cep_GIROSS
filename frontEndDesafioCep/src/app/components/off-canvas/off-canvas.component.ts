import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-off-canvas',
  templateUrl: './off-canvas.component.html',
  styleUrls: ['./off-canvas.component.css'],
})
export class OffCanvasComponent {

  @Input() isClicked = false;
  @Output() isClickedChange = new EventEmitter<boolean>();

  toggleOffCanvas() {
    this.isClicked = !this.isClicked;
    this.isClickedChange.emit(this.isClicked);
  }

  closeOffCanvas() {
    this.isClicked = false;
    this.isClickedChange.emit(this.isClicked);
  }
}
