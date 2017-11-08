import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AppRoutingModule} from './/app-routing.module';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { AboutComponent } from './components/about/about.component';
import { TestsCardsComponent } from './components/tests-cards/tests-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    AboutComponent,
    TestsCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // bootstrap
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
