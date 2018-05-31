export class data_types{
    id?: number;
    year: number;
    month: number;
    fixedService: fixed_service[];
    varService: var_service[];
}
export class fixed_service{
    id?: number;
    name: string;
    sum?: number;
}
export class var_service{
    id: number;
    name: string;
    previous: number;
    current: number;
    tariff: number;
    sum: number;
}
