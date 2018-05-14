// export class data_service{
//     name_service: String;
//     year: number;
//     month: number;
//     sum: number;
//     metric: number;
//     tariff: number;
//     paid: boolean;
// }
export class data_service{
    id:number;
    year: number;
    month: number;
    fixedService: FixedService[];
    varService: VarService[];
}
class FixedService{
    id: number;
    name: string;
    sum: number;
}
class VarService{
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
}
