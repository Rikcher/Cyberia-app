export interface Filter {
    id: number;
    name: string;
}

export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    categories: {id: number}[]
}