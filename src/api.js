import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID xUcrm5IG8i2aQPu4cIopOjU4pBaF_8p1AIoTCxgYNl4'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
};

export default searchImages;