import { Component } from '@angular/core';
import {StocksComponent} from './stocks.component';
import {MutualfundsComponent} from './mutualfunds/mutualfunds.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello!';
  today = new Date();
}
