import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Inject,
  HostListener,
  Input
} from '@angular/core';

import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../../shared/services/window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  @Input() public currentSection = '';
  @ViewChild('headerNav') headerNav: ElementRef;
  @ViewChild('navbarToggler') navbarToggler: ElementRef;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {}

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    if (scrollTop > 200) {
      this.headerNav.nativeElement.classList.add('navbar-active');
      this.navbarToggler.nativeElement.classList.add('navbar-active');
    }
    if (scrollTop < 200) {
      this.headerNav.nativeElement.classList.remove('navbar-active');
      this.navbarToggler.nativeElement.classList.remove('navbar-active');
    }
  }
}
