/**
 * Fetches a specific country from the Country API.
 *
 * @async
 * @param {string} countryName - The parameter to append to the URL.
 * @returns {Promise<object>} A resource object returned from the API.
 *
 * @throws {Error} HTTP error!
 */

const countryData = async (searchTerm) => {
    const URL = `https://restcountries.com/v3.1/name/${searchTerm}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};

export default countryData;
