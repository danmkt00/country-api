import dom from '../dom.js';
import searchCountryHandler from '../handlers/search-country-handler.js';

const fetchAndRenderCountry = () => {
    dom.searchBtn.addEventListener('click', searchCountryHandler);
};

export default fetchAndRenderCountry;
