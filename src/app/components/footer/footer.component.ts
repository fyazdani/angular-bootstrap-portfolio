import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  scrollTo(section) {
    document
      .querySelector('#' + section)
      .scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
