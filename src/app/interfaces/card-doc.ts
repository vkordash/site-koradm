export interface ICardDoc {
    id    : number;
    id_menu  ?: number;
    id_card : number;
    name : string;
    src  ?: string;
    sector  ?: string;
    media  ?: string;
    keywords  ?: string;
    place  ?: string;
    href  ?: string;
    num_doc  ?: string;
    typ ?: number;
    dt_create ?: string,
    dt_public ?: string,
    date  ?: string;
    in_force ?: number;
    dt_force ?: string;
    in_just ?: number;
    num_just ?: string;
    date_just ?: string;
    docs ?:IAttachDocs[];
}

export interface IAttachDocs {
    id: number;
    id_card: number;
    typ: number;
    memo: string;
    p7s: number;
    p_a: number;
}