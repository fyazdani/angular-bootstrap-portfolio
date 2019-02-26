import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() public currentAnimateSection = '';
  constructor() {}

  ngOnInit() {}

  toggleAnimation(event: HTMLDivElement, direction: string) {
    const element = event;
    if (
      this.currentAnimateSection === 'projects' &&
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
