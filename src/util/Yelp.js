const apiKey = 'fhY8a4-CHtrnCh8HWp4Kz1DPwEw1kk212le1MHXgXu8PuPoU2YSnQ3OSkgpSJ9niGfSdPQOp2CCQGMbZNcZLeg3TjrjsqbrJpo-XEFKsxZJ3uEnUwo8Bum3E-mu0XnYx';

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {Authorization: `Bearer ${apiKey}`
        }})
        .fetch('https://cors-anywhere.herokuapp.com/')
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                })
            }
        })
    }
};
export default Yelp;