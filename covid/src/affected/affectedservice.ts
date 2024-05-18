import axios from 'axios';

export interface CovidResponse {
    country: string;
    cases: number;
    deaths: number;
    recovery: number;
}

export const getResponse = async (location: string): Promise<CovidResponse> => {
    try {
        const results = await axios.get(`https://disease.sh/v3/covid-19/countries/${location}`);
        return {
            country: results.data.country,
            cases: results.data.cases,
            deaths: results.data.deaths,
            recovery: results.data.recovered
        };
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        throw error;
    }
};