export interface IListPhoto {
    id    : number;
    name : string;
    icon: string;
    id_component: number;
    show_dt: boolean;
    show_name: boolean;
    show_icon: boolean;
    photo: {
        src ?: string;
        alt ?: string;
        title ?: string;
        width ?: number;
        height ?: number;
        path ?: string;    
    }
}