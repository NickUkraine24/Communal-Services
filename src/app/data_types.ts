// export class data_service{
//     name_service: String;
//     year: number;
//     month: number;
//     sum: number;
//     metric: number;
//     tariff: number;
//     paid: boolean;
// }
export class data_types{
    id:number;
    year: number;
    month: string;
    fixedService: fixed_service[];
    varService: var_service[];
}
class fixed_service{
    id: number;
    name: string;
    sum: number;
}
class var_service{
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
}
