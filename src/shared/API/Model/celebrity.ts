import ICarrossel from "./carrossel";

export interface Iresults{
    id:number;
    name:string
    profile_path:string;
    known_for:ICarrossel[]
    
    }

    export default interface Icelebrity{
    results:Iresults[]
    }