export interface Item{
    id: number;
    title: string;
    icon: string;
    link:string;
}

export interface Category {
    id: number;
    name: string;
    description: string;
    icon: string;
    items: Item[];
}