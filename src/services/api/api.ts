import axios from "./axios";

export const fetchData = async <T>(url: string): Promise<T> => {
    return (await axios.get(url)).data; 
};