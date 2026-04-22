const paisInput = document.getElementById('paisInput');
const buscarBtn = document.getElementById('buscarBtn');
const resultado = document.getElementById('resultado');

async function buscarPais(pais) {
    try {
        let resposta = await fetch(`https://restcountries.com/v3.1/name/${pais}?fullText=true`);
        let dados = await resposta.json();

        if (!resposta.ok) {
            throw new Error('País não encontrado!');
        }

        let paisInfo = dados[0];

        resultado.innerHTML = `
            <h2>${paisInfo.name.common}</h2>
            <img src="${paisInfo.flags.png}" width="150">
            <p><strong>Capital:</strong> ${paisInfo.capital ? paisInfo.capital[0] : "Não informado"}</p>
            <p><strong>Região:</strong> ${paisInfo.region}</p>
            <p><strong>População:</strong> ${paisInfo.population.toLocaleString()}</p>
        `;
    } 
    catch (erro) {
        resultado.innerHTML = `<p>País não encontrado. Tente novamente!</p>`;
    }
}

buscarBtn.addEventListener('click', () => {
    buscarPais(paisInput.value);
});