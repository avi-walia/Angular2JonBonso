import {Injectable} from '@angular/core';

@Injectable()
export  class StockService{

    getStocks() : string[]{
        return ['Tech','Infosys'];
    }

}