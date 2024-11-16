import axios from "./axios";

export const fetchData = async <T>(url: string): Promise<T> => {
    return (await axios.get(url)).data; 
};

export const postData = async <T>(url: string, data: Record<string, any>): Promise<T> => {
    return (await axios.post(url, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
    }))
};
