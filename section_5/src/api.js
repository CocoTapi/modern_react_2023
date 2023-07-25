import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ocj7_CRFuRZ5X9CEqW_wXzy6Hwd7hDW1461kblQLsnY'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;