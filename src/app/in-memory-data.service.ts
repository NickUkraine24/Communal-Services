// import { InMemoryDbService } from 'angular-in-memory-web-api';

// import { data_types } from './data_types';
// import { pay_types } from './pay_types';

// export class InMemoryDataService implements InMemoryDbService{

//     // payment: data_types[];
//     pay: pay_types[];

//     createDb(){
//     // constructor() {
//         const payment: data_types[] = [
//             {
//                 id: 1, year: 2018, month: 1,  
//                 fixedService: [
//                     { id: 1, name: 'rent', sum: 43},
//                     { id: 2, name: 'heating', sum: 1100}
//                 ],
//                 varService: [
//                     { id: 1, name: 'electricity', previous: 12343, current: 12715, tariff: 2.05, sum: 764}, 
//                     { id: 2, name: 'water supply', previous: 435345, current: 435423, tariff: 1.56, sum: 121},  
//                     { id: 3, name: 'gas', previous: 112123, current: 112163, tariff: 3.8, sum: 153},
//                     // { id: 4, name: 'gas2', previous: 0, current: 0, tariff: 3.8, sum: 0}
//                 ]},  
//             { 
//                 id: 2, year: 2017, month: 3, 
//                 fixedService: [
//                     { id: 1, name: 'rent', sum: 453 },  
//                     { id: 2, name: 'heating', sum: 100 }
//                 ],  
//                 varService: [
//                     { id: 1, name: 'electricity', previous: 12715, current: 13087, tariff: 2.05, sum: 764},
//                     { id: 2, name: 'water supply', previous: 435345, current: 435423, tariff: 1.56, sum: 121},
//                     { id: 3, name: 'gas', previous: 112123, current: 112163, tariff: 3.8, sum: 153}
//                 ]},
//             { 
//                 id: 3, year: 2016, month: 4, 
//                 fixedService: [
//                     { id: 1, name: 'rent', sum: 453 },  
//                     { id: 2, name: 'heating', sum: 100 }
//                 ],  
//                 varService: [
//                     { id: 1, name: 'electricity', previous: 13087, current: 13459, tariff: 2.05, sum: 764},
//                     { id: 2, name: 'water supply', previous: 435345, current: 435423, tariff: 1.56, sum: 121},
//                     { id: 3, name: 'gas', previous: 112123, current: 112163, tariff: 3.8, sum: 153}
//                     ]
//                 },
//             {
//                 id: 4, year: 2018, month: 4,  
//                 fixedService: [
//                     { id: 1, name: 'rent', sum: 10},
//                     { id: 2, name: 'heating', sum: 1000}
//                 ],
//                 varService: [
//                     { id: 1, name: 'electricity', previous: 13459, current: 13734, tariff: 2.05, sum: 564}, 
//                     { id: 2, name: 'water supply', previous: 12345, current: 13121, tariff: 1.56, sum: 1211},  
//                     { id: 3, name: 'gas', previous: 112123, current: 112294, tariff: 3.8, sum: 653}
//                 ]},  
//             ]; 
    
//         const pay = [
//             /*{id: 1, name: 'rent', metric: 123, tariff: 2.4},
//             {id: 2, name: 'gas', metric: 2233, tariff: 0.4},
//             {id: 3, name: 'electricity', metric: 3345, tariff: 0.2},
//             {id: 4, name: 'heating', metric: 5623, tariff: 2},
//             {ID: 5, name: 'my', metric: 768}
// */
//         ]
//     return {payment, pay}; 
//   }
// }
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { fixed_service, data_types, var_service } from './data_types';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payment: data_types[] = [];
        const fixed_service: fixed_service[] = [];
        const var_service: var_service[] = [];
        const db = { payment, fixed_service, var_service };
        return db;
    }

    genId(collection) {
        var maxId = 0;
        collection.reduce(function (prev, item) {
            maxId = Math.max(maxId, typeof item.id === 'number' ? item.id : maxId);
        }, null);
        return maxId + 1;
    };
}