export interface Tree {
}

export interface ItemMenu {
    id        : number;
    name     : string;
    icon: string;    
    children : ItemMenu[];   
    url?: string ;
}

export interface IMenu {
    id?        : number;
    parent? : number;
    name?     : string;
    icon?: string;
    id_component?: number;
    children? : IMenu[];
    routerLink?: string;
    url?:string;
    new_window?:number,
    pn?:number;
    activ?: boolean;
    show_name?: boolean;
    show_dt?: boolean;    
    show_icon?: boolean;  
    last_user?: number;
    last_date?: Date;
    create_date?: Date;
    create_user?: number;
    id_site?: number;
    queryParams?: any;
}