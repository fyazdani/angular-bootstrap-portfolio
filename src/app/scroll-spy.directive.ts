import {
  Directive,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  HostListener,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[scrollSpy]'
})
export class ScrollSpyDirective implements OnInit {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  @Output() public sectionAnimateChange = new EventEmitter<string>();
  private currentSection: string;
  private currentAnimateSection: string;

  constructor(private _el: ElementRef) {}
  private largDevices = 992;
  private isLargDevice = false;
  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > this.largDevices) {
      this.isLargDevice = true;
    }
  }
  @HostListener('window:resize', [])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth > this.largDevices) {
      this.isLargDevice = true;
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    let currentSection: string;
    let animateSection: string;
    const children = this._el.nativeElement.children;
    const scrollTop = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    const docHeight = Math.max(
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.body.clientHeight
    );
    const offset = 0;
    const animateOffset = 300; // default offset
    for (let i = 0; i < children.length; i++) {
      const tmpElement = children[i];
      for (let j = 0; j < tmpElement.children.length; j++) {
        const element = tmpElement.children[j];

        if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
          if (element.offsetTop <= scrollTop + offset) {
            currentSection = element.id;
          }
          if (element.offsetTop <= scrollTop + animateOffset) {
            animateSection = element.id;
          }
          if (scrollTop + window.innerHeight > docHeight - 100) {
            currentSection = 'footer';
          }
        }
      }
    }
    if (this.isLargDevice && animateSection !== this.currentAnimateSection) {
      this.currentAnimateSection = animateSection;
      this.sectionAnimateChange.emit(this.currentAnimateSection);
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
