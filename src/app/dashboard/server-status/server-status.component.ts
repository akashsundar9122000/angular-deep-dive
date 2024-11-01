import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit{
  currentStatus = signal<'online' | 'offline' | 'unknown' >('online'); //current status can contains only those 3 values
  private destroyRef = inject(DestroyRef);

  constructor(){
    effect(() => {
      console.log(this.currentStatus());
    })
  }

  ngOnInit(){
    const interval = setInterval(() =>{
      const rand = Math.random(); //gives value from 0-1 (1 excluded)

      if(rand < 0.5){
        this.currentStatus.set('online');
      } else if(rand < 0.9){
        this.currentStatus.set('offline');
      } else{
        this.currentStatus.set('unknown');
      }
    }, 5000); //calls this method every 5 seconds this is JS function

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    })
  }

}
