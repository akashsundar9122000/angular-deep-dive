import { afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {

  label = input.required<string>();

  private element = inject(ElementRef);

  // @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  onClick(){
    console.log(this.control());
  }

  // constructor(){
  //   afterRender (() =>{
  //     console.log(" after render");
  //   });

  //   afterNextRender(()=>{
  //     console.log(" after next render");
  //   })
  // }

  // @HostListener('click') onClicked(){
  //   console.log(this.element);
  // }
  // @HostBinding('class') className = 'control';

}
