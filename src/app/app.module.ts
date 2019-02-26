import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'node_modules/ngx-page-scroll';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/main/about/about.component';
import { ProjectsComponent } from './components/main/projects/projects.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    MainComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    NgbModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
