import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() public sectionChange = new EventEmitter<string>();
  @Output() public sectionAnimateChange = new EventEmitter<string>();
  private sectionId = '';
  sectionAnimationId = '';
  constructor() {}

  ngOnInit() {}

  onSectionChange(sectionId: string) {
    this.sectionId = sectionId;
    this.sectionChange.emit(sectionId);
  }
  onSectionAnimationChange(sectionAnimationId: string) {
    this.sectionAnimationId = sectionAnimationId;
    this.sectionAnimateChange.emit(sectionAnimationId);
  }
}
