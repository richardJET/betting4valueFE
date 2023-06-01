import axios from 'axios';

const apiEndpoint = 'http://ec2-3-16-152-4.us-east-2.compute.amazonaws.com:8000/betting-data/';

async function fetchData() {
    try {
        const response = await axios.get(apiEndpoint);
        return(response);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.log(error.response.data); // Log the response error data to the console
            console.log(error.response.status); // Log the response error status to the console
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.log('Error', error.message);
        }
        console.log(error.config); // Log the error config to the console
    }
}

export { fetchData };