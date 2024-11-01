import { Component, input, Input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  ticketData = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();

  onToggleDetails(){
    this.detailsVisible.set(!this.detailsVisible());
    //this.detailsVisible.update((oldValue) => !oldValue); - alternative way which will give old value as arguement
  }

  onMarkAsCompleted(){
    this.close.emit();
  }

}
