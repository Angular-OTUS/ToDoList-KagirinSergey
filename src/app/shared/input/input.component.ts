import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  // @ViewChild('taskInput') taskInput!:ElementRef<HTMLInputElement>;
  // @Output() newTask: EventEmitter<string> = new EventEmitter<string>();
  public disabled = true;

  public taskHandler(task: string): void {
    this.disabled = task.length > 3 ?  false : true;
  }

}


