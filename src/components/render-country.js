const renderCountry = (data) => {
    //main container
    const countryCard = document.createElement('div');
    countryCard.classList.add('country-card');

    //official name
    const officialName = document.createElement('h1');
    officialName.innerText = data.name.official;

    //flag
    const flag = document.createElement('img');
    flag.src = data.flags.svg || data.flags.png;

    //name
    const name = document.createElement('p');
    name.innerHTML = `<strong>Common name:</strong> ${data.name.common}`;

    //capital
    const capital = document.createElement('p');
    capital.innerHTML = `<strong>Capital:</strong> ${data.capital}`;

    //languages
    const languages = document.createElement('ul');
    languages.className = 'languages';

    const langHead = document.createElement('p');
    langHead.innerText = 'Languages:';

    languages.append(langHead);

    for (let key in data.languages) {
        const language = document.createElement('li');
        language.innerText = `${data.languages[key]}`;
        languages.append(language);
    }

    //population
    const population = document.createElement('p');
    population.innerHTML = `<strong>Population:</strong> ${data.population.toLocaleString()}`;

    //currency
    const currency = document.createElement('p');
    currency.innerHTML = '<strong>Currency:</strong> ';
    for (let key in data.currencies) {
        currency.innerHTML += `${data.currencies[key].name} - ${data.currencies[key].symbol} `;
    }

    countryCard.append(
        officialName,
        flag,
        name,
        capital,
        languages,
        population,
        currency
    );

    return countryCard;
};

export default renderCountry;
