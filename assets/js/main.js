addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = 'http://economia.awesomeapi.com.br/xml/USD-BRL/1' & 'http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20220101&end_date=20221231' & 'http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20180101&end_date=20181231' & 'http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20150101&end_date=20151231'; // URL da API não segura

    // Faz uma solicitação à API usando fetch
    const response = await fetch(url);

    // Retorna a resposta da API
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
            'Access-Control-Allow-Origin': '*', // Permite solicitações de qualquer origem
            'Content-Type': 'application/xml', // Define o tipo de conteúdo como XML ou o tipo apropriado
        },
    });
}


const cotationValue = document.querySelector(".dolar-hoje");

fetch("http://economia.awesomeapi.com.br/xml/USD-BRL/1")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const rate = parseFloat(xmlDoc.getElementsByTagName("bid")[0].textContent);
        const formattedRate = rate.toFixed(2);

        cotationValue.innerHTML += `<p class='nome'>R$ ${formattedRate}</p>`;
    })
    .catch(error => {
        console.error("Erro ao buscar cotação:", error);
        cotationValue.textContent = "Erro ao buscar cotação";
    });

const cotationValue2022 = document.querySelector(".dolar-2022");

fetch("http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20220101&end_date=20221231")
    .then(response => response.text())
    .then(data => {
        const parser2022 = new DOMParser();
        const xmlDoc2022 = parser2022.parseFromString(data, "text/xml");
        const rate2022 = parseFloat(xmlDoc2022.getElementsByTagName("bid")[0].textContent);
        const formattedRate2022 = rate2022.toFixed(2);

        cotationValue2022.innerHTML += `<p class='nome'>R$ ${formattedRate2022}</p>`;
    })
    .catch(error => {
        console.error("Erro ao buscar cotação:", error);
        cotationValue2022.textContent = "Erro ao buscar cotação";
    });

const cotationValue2018 = document.querySelector(".dolar-2018");

fetch("http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20180101&end_date=20181231")
    .then(response => response.text())
    .then(data => {
        const parser2018 = new DOMParser();
        const xmlDoc2018 = parser2018.parseFromString(data, "text/xml");
        const rate2018 = parseFloat(xmlDoc2018.getElementsByTagName("bid")[0].textContent);
        const formattedRate2018 = rate2018.toFixed(2);

        cotationValue2018.innerHTML += `<p class='nome'>R$ ${formattedRate2018}</p>`;
    })
    .catch(error => {
        console.error("Erro ao buscar cotação:", error);
        cotationValue2018.textContent = "Erro ao buscar cotação";
    });

const cotationValue2015 = document.querySelector(".dolar-2015");

fetch("http://economia.awesomeapi.com.br/xml/USD-BRL/1?start_date=20150101&end_date=20151231")
    .then(response => response.text())
    .then(data => {
        const parser2015 = new DOMParser();
        const xmlDoc2015 = parser2015.parseFromString(data, "text/xml");
        const rate2015 = parseFloat(xmlDoc2015.getElementsByTagName("bid")[0].textContent);
        const formattedRate2015 = rate2015.toFixed(2);

        cotationValue2015.innerHTML += `<p class='nome'>R$ ${formattedRate2015}</p>`;
    })
    .catch(error => {
        console.error("Erro ao buscar cotação:", error);
        cotationValue2015.innerHTML += "<p class='nome'>Erro ao buscar cotação</p>";
    });
