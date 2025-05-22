import axios, { isAxiosError } from "axios";
import {
  type CompanyBalanceSheet,
  type CompanyCashFlow,
  type CompanyComparableData,
  type CompanyIncomeStatement,
  type CompanyKeyMetrics,
  type CompanyProfile,
  type CompanySearch,
} from "./company";

export const searchCompanies = async (query: string | null) => {
  try {
    const data = await axios.get<CompanySearch[]>(
      `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getCompanyProfile = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyProfile>(
      `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getKeyMetrics = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getIncomeStatement = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyIncomeStatement[]>(
      `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getBalanceSheet = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyBalanceSheet[]>(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getCashFlowStatement = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyCashFlow[]>(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=40&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};

export const getComparableData = async (query: string | null) => {
  try {
    const data = await axios.get<CompanyComparableData[]>(
      `https://financialmodelingprep.com/stable/stock-peers?symbol${query}&apikey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    return data?.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected error", error);
      return "An unexpected error has ocurred.";
    }
  }
};
