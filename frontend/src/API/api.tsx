import axios, { isAxiosError } from 'axios';
import type { CompanySearch } from "./company"

interface SearchResponse{
    data: CompanySearch[];
}

export const searchCompanies = async(query:string)=>{
    try {
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else{
            console.log("Unexpected error", error);
            return "An unexpected error has ocurred.";
        }
    }
}