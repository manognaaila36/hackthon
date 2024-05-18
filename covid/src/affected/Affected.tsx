import React, { useEffect, useState } from "react";
import { getResponse, CovidResponse } from './affectedservice';

export const Affected: React.FC = (): JSX.Element => {
    const [location, setLocation] = useState<string>("India");
    const [covidResponse, setCovidResponse] = useState<CovidResponse | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResponse = async () => {
            try {
                const result = await getResponse(location);
                setCovidResponse(result);
            } catch (error) {
                console.error('Error fetching COVID data:', error);
                setError('Error fetching COVID data');
            }
        };
        fetchResponse();
    }, [location]);

    return (
        <div className="a">
            <h2>Covid Affected</h2>
            <select value={location} onChange={(e) => setLocation(e.target.value)}>
                <option value="USA">USA</option>
                <option value="America">America</option>
                <option value="India">India</option>
                <option value="China">China</option>
            </select>
            {error && <p>{error}</p>}
            {covidResponse && (
                <>
                    <p>Country : {covidResponse.country}</p>
                    <p>Covid Cases : {covidResponse.cases}</p>
                    <p>Covid Deaths : {covidResponse.deaths}</p>
                    <p>Covid Recovery: {covidResponse.recovery}</p>
                </>
            )}
        </div>
    );
};