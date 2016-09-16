import {Component} from '@angular/core';
import {Page} from 'ui/page';

@Component({
  selector: 'cf-app',
  template: '<page-router-outlet></page-router-outlet>'
})
export class AppComponent {

   constructor(page: Page) {
        page.actionBar.title = 'NativeScript Hackathon';
        page.backgroundSpanUnderStatusBar = true;
    }
}
