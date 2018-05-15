import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const payment = [
      {
          id: 1, year: 2018, month: 'January',  
          fixedService: [
              { id: 1, name: 'rent', sum: 43},
              { id: 2, name: 'heating', sum: 1100}
          ],
          varService: [
              { id: 1, name: 'Electricity', previous: 12343, current: 21, tariff: 2.05, sum: 764}, 
              { id: 2, name: 'Water supply', previous: 435345, current: 26, tariff: 1.56, sum: 121},  
              { id: 3, name: 'Gas', previous: 112123, current: 21, tariff: 3.8, sum: 153}
          ]},  
      { 
          id: 2, year: 2017, month: 'March', 
          fixedService: [
              { id: 1, name: 'Rent', sum: 453 },  
              { id: 2, name: 'Heating', sum: 100 }
          ],  
          varService: [
              { id: 1, name: 'Electricity', previous: 12343, current: 21, tariff: 2.05, sum: 764},
              { id: 2, name: 'Water supply', previous: 435345, current: 26, tariff: 1.56, sum: 121},
              { id: 3, name: 'Gas', previous: 112123, current: 21, tariff: 3.8, sum: 153}
          ]
      }]; 
      return {payment}; 
  }
  

}
