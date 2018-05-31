export class AddTypes {
    year: number;
    month: number;
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
