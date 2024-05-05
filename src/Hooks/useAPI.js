import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Defining an async function to fetch data from the API
        const fetchData = async () => {
            try {
                // Reseting loading and error states
                setLoading(true);
                setError(null);

                // Making the API request using Axios and wait for the response
                const response = await axios.get(url);

                // Seting the fetched data in state
                setData(response.data);
            } catch (err) {
                // If an error occurs, seting the error state
                setError(err);
            } finally {
                // In all cases, set loading to false once fetching is complete
                setLoading(false);
            }
        };

        // Call the fetchData function to fetch data when the component mounts
        fetchData();
    }, [url]);

    // Return the fetched data, loading state, and error state from the hook
    return { data, loading, error };
};

export default useAPI;
