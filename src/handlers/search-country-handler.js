import dom from '../dom.js';
import countryData from '../api-calls/country-data.js';
import renderCountry from '../components/render-country.js';

const searchCountryHandler = async () => {
    const userInput = dom.input.value.trim();
    dom.countryCard.innerText = '';

    try {
        //fetch data
        const data = await countryData(userInput);

        //append all the countries
        data.forEach((country) => {
            dom.countryCard.append(renderCountry(country));
        });

    } catch (err) {
        console.error(err);
        dom.countryCard.innerText = `No country found with the name '${userInput}'`;
    }
};

export default searchCountryHandler;
