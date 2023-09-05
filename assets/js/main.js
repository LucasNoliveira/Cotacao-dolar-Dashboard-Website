async function fetchCotationForYear(year, elementSelector) {
    const url = `http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=${year}0101&end_date=${year}1231`;

    try {
        const response = await fetch(url);
        const data = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const rate = parseFloat(xmlDoc.getElementsByTagName("bid")[0].textContent);
        const formattedRate = rate.toFixed(2);

        const cotationValue = document.querySelector(elementSelector);
        cotationValue.innerHTML += `<p class='nome'>R$ ${formattedRate}</p>`;
    } catch (error) {
        console.error(`Erro ao buscar cotação para o ano ${year}:`, error);
        const cotationValue = document.querySelector(elementSelector);
        cotationValue.innerHTML += "<p class='nome'>Erro ao buscar cotação</p>";
    }
}

// Chame as funções para buscar e atualizar as cotações
fetchCotationForYear(2022, ".dolar-2022");
fetchCotationForYear(2018, ".dolar-2018");
fetchCotationForYear(2015, ".dolar-2015");
