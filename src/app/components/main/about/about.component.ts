import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() public currentAnimateSection = '';
  constructor() {}

  ngOnInit() {}

  toggleAnimation(event: HTMLDivElement, direction: string) {
    const element = event;
    if (
      this.currentAnimateSection === 'about' &&
      (!element.classList.contains('my-animate-left') ||
        !element.classList.contains('my-animate-right'))
    ) {
      element.classList.remove('my-nodisplay');
      if (direction === 'left') {
        element.classList.add('my-animate-left');
      } else if (direction === 'right') {
        element.classList.add('my-animate-right');
      }
    }
  }
}
