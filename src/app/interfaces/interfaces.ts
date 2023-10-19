export interface IMenuItem {
    label: string;
    href: string;
    subItems?: IMenuItem [];
    icono?: string;
    targetBlank?: boolean; 
}

export interface ISkill {
    id: string;
    nombre: string;
    progress: number;
    logo?: IImagen;
}

export interface IImagen {
    src: string;
    alt: string;
}