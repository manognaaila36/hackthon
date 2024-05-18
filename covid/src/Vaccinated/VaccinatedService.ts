import axios from 'axios';

export interface VaccinatedResponse {
    country: string;
    Vaccinated: number;
}

export const getResponse = async (location: string): Promise<VaccinatedResponse> => {
    try {
        const results = await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${location}?lastdays=1`);
        const date = Object.keys(results.data.timeline)[0];
        const vaccinated = results.data.timeline[date];
        return {
            country: results.data.country,
            Vaccinated: vaccinated
        };
    } catch (error) {
        console.error('Error fetching COVID data:', error);
        throw error; // Rethrow the error to handle it in the component
    }
};
