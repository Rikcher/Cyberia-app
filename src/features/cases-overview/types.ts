export interface Filter {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    title: string;
    image: string;
    categories: {id: number}[]
}