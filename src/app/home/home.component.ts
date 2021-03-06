import {
  AfterViewChecked,
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';

import { TableExport } from 'tableexport';
// **** jQuery **************************
// import $ from 'jquery';
// import 'tableexport';
// **************************************

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, AfterViewChecked {
  /**
   * Set our default values
   */
  public localState = {
    data: [
      {
        name: 'Thor Walton',
        position: 'Regional Director',
        age: 45,
        salary: '$98,540'
      },
      {
        name: 'Travis Clarke',
        position: 'Software Engineer',
        age: 30,
        salary: '$275,000'
      },
      {
        name: 'Suki Burks',
        position: 'Office Manager',
        age: 22,
        salary: '$67,670'
      }
    ]
  };

  public te: TableExport;
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
    public title: Title
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public ngAfterViewChecked() {
    // NOTE: the `reset` is to prevent multiple renders on state change
    new TableExport(document.querySelector('#default-table')).reset();
    // **** jQuery **************************
    // $('#default-table').tableExport().reset();
    // **************************************
  }

  public submitState(data: string) {
    console.log('submitState', data);
    this.appState.set('data', data);
  }
}
