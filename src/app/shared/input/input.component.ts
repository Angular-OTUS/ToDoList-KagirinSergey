import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Output() value: string = "";

  public onChange(task: string): void {
    this.value = task;
  }
}


