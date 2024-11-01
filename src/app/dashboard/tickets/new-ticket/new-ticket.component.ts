import { Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>; //it is the type for wrapper object

  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  @Output() add = new EventEmitter<{title:string;text:string}>();
  //add = output>{title:string; text:string}();

  onSubmitForm(titleEntered: string, textEntered: string){
    this.add.emit({title: titleEntered, text: textEntered});
    this.form?.nativeElement.reset();
  }
}
