import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stock',
    template: `
        <h1>Stocks</h1>
        {{name}}
        <ul [ngClass]="{customClass:true, centerClass:true}">
            <li *ngFor="let stock of stocks">{{stock}}</li>
        </ul>
        <hr>
        <ul>
            <li *ngFor="let stockMarket of stockMarkets">{{stockMarket}}</li>
        </ul>
        <hr>

    `,
    styles: [
        `
        .customClass{
            color: pink;
        }
        `
    ]

})

export class StocksComponent{
    stocks = [];
    name = 'List of Stocks';
    //stocks = ['IBM', 'Apple', 'Google'];
    stockMarkets = ['Europe', 'Canada', 'USA'];

    constructor(stockService : StockService){
        this.stocks = stockService.getStocks();
    }
}