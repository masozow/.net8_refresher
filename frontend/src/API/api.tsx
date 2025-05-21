import axios, { isAxiosError } from 'axios';
import {  type CompanyProfile, type CompanySearch } from "./company"

export const searchCompanies = async(query:string)=>{
    try {
        const data = await axios.get<CompanySearch[]>(`https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`);
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

export const getCompanyProfile=async(query:string)=>{
    try {
        const data = await axios.get<CompanyProfile>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        );
        return data?.data;
    }catch (error) {
        if (isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else{
            console.log("Unexpected error", error);
            return "An unexpected error has ocurred.";
        }
    }
}