
// Url
const url = 'https://pomber.github.io/covid19/timeseries.json';

// Data
const getData = function() {
    fetch(url)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Status : ' +
                        response.status);
                    return;
                }
                response.json()
                    .then(function (data) {
                        
                        const all = data;
                        const dataContent = document.getElementById('datalist');
                        
                        for (const [key, value] of Object.entries(all)) {
                            let name = key,
                                elem = value.pop(),
                                date = elem['date'],
                                confirmed = elem['confirmed'],
                                recovered = elem['recovered'],
                                deaths = elem['deaths'];
                            
                            dataContent.insertAdjacentHTML('beforeend',
                                '<div class="col-12 col-lg-4">' +
                                    '<div class="block">' +
                                        '<div class="name">' + name + '</div>' +
                                        '<div class="date">Date : ' + date + '</div>' +
                                        '<div class="confirmed">Infectés : ' + confirmed + '</div>' +
                                        '<div class="deaths">Morts : ' + deaths + '</div>' +
                                        '<div class="recovered">Rétablies : ' + recovered + '</div>' +
                                '</div></div>');
                        }

                    });
            }
        )
        .catch(function (err) {
            console.log('Erreur :-S', err);
        });
}
getData()