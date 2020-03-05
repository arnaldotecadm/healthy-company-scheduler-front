export class Alert{

    constructor(
        readonly alerType: AlerType, 
        readonly message : string){
    }
}

export enum AlerType{
    SUCCESS,
    WARNING,
    DANGER,
    INFO
}