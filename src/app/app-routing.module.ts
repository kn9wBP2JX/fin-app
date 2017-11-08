import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {Test1Component} from './components/test1/test1.component';
import {Test2Component} from './components/test2/test2.component';
import {Test3Component} from './components/test3/test3.component';
import {AboutComponent} from './components/about/about.component';
import {TestsCardsComponent} from './components/tests-cards/tests-cards.component';

const routes: Routes = [
  {path: 'test1', component: Test1Component},
  {path: 'test2', component: Test2Component},
  {path: 'test3', component: Test3Component},
  {path: 'about', component: AboutComponent},
  {path: '', component: TestsCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
