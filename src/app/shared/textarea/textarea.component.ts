import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Output() value: string = "";

  public onChange(description: string): void {
    this.value = description;
  }
}
