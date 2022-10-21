'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
const getCountryData = function (country) {

//AJAX APIs
    const request = new XMLHttpRequest();
    request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener(`load`, function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
          <article class="country">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>population</span>${+data.population / 100000}</p>
            <p class="country__row"><span>languages</span>${data.languages[0].name}</p>
            <p class="country__row"><span>currencies</span>${data.currencies[0].name}</p>
          </div>
        </article>    
    `;

        countriesContainer.insertAdjacentHTML(`beforeend`, html);
        countriesContainer.style.opacity = 1;
    });

}

getCountryData(`Belgium`);
getCountryData(`USA`);
getCountryData(`France`);
*/


const renderCountry = function (data, className = '') {
    const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>population</span>${+data.population / 1000000}</p>
            <p class="country__row"><span>languages</span>${data.languages[0].name}</p>
            <p class="country__row"><span>currencies</span>${data.currencies[0].name}</p>
          </div>
        </article>    
    `;

    countriesContainer.insertAdjacentHTML(`beforeend`, html);
    countriesContainer.style.opacity = 1;
};

/*

//callback hell
const getCountryAndNeighbour = function (country) {

//AJAX APIs
    const request = new XMLHttpRequest();
    request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener(`load`, function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderCountry(data);
        
        const neighbourCreate = function(data) {

            // get neighbour country
            const neighbour = data.borders?.[0];
            const request2 = new XMLHttpRequest();
            request2.open(`GET`, `https://restcountries.com/v2/alpha/${neighbour}`);
            request2.send();
            request2.addEventListener(`load`, function () {
                const data2 = JSON.parse(this.responseText);
                console.log(data2);
                renderCountry(data2, `neighbour`);
                
               //neighbourCreate.call(this, data2); // loops 
            });
        }
        neighbourCreate.call(this, data);
    });
}
    
//getCountryAndNeighbour("Belgium");
getCountryAndNeighbour("USA");

*/

//promises, fetch API

// const request = new XMLHttpRequest();
// request.open(`GET`, `https://restcountries.com/v2/name/${country}`);
// request.send();

//const request = fetch(`https://restcountries.com/v2/name/belgium`);
//console.log(request);

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/alpha/${country}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             renderCountry(data);
//         });
// }

const getJSON = function (url, errormsg = 'something went wrong') {
    return fetch(url)
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error(errormsg + `${response.status}`);
            }
            return response.json();
        });
}

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/alpha/${country}`, `country not found`)
        .then(data => {
            renderCountry(data);
            const neighbour = data.borders?.[0];
            if (!neighbour) {
                throw new Error('no neighbour found');
            }
            return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, `country not found`);
        })
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => console.log(err))
        .finally(() => console.log('finally!; hiding loading spinner now !'));
}

// btn.addEventListener('click', function () {
//     getCountryData(`DE`);
// });

//getCountryData(`AUS`);

/*

//event loop
console.log(`Test start`);
setTimeout(() => console.log(`0 sec timer`), 0);
setTimeout(() => console.log(`0 sec timer again`), 0);
Promise.resolve(`Resolved promise 1`).then(res => console.log(res));
Promise.resolve(`Resolved promise 2`).then(res => console.log(res));
Promise.resolve(`Resolved promise 3`).then(res => {
    for (let i = 0; i < 10000000000; i++) {
    }
    console.log(res);
});
console.log('Test end');
*/

/*
// promises
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log(`lotto drawing ... `);
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve(`You WIN!`);
        } else {
            reject(new Error(`You lost :-(`));
        }
    }, 1000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying settimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(5)
    .then(() => {
    console.log('waited for 5 seconds');
    return wait(1)})
    .then(() => console.log(`waited for 1 second`));


Promise.resolve(`abc`).then(x => console.log(x));
Promise.reject(new Error(`abc`)).then(x => console.error(x));
*/


const whereAmI = async function (country) {
    try {
        //fetch(`https://restcountries.com/v2/name/${country}`) //async await is syntactic sugar over promises and then , catch, etc.
        //  .then(res => console.log(res));

        const res = await fetch(`https://restcountries.com/v2/name/${country}`);
        if (!res.ok) throw new Error('not 200');
        const data = await res.json();
        renderCountry(data[0]);
        return `You are in ${data[0].name}`;
    } catch (err) {
        console.error(err);
        throw err;
    }
};


//const result = whereAmI(`Belgium`);
//console.log(result); // async function always returns a promise

// whereAmI(`Belgium`)
//     .then(result => console.log(result))
//     .catch(err => console.error(err.message)) // catch block not executed ...
//     .finally(() => console.log('3. finished getting location'));

//you can not do await , you have to be in a async function -> so create a function to do the await
(async function () {
    try {
        console.log(`1. starting`);
        const result = await whereAmI(`Belgium`);
        console.log(result);
    } catch (err) {
        console.error(err.message);
    } finally {
        console.log(`3. finished`);
    }

})();

const get3Countries = async function (c1, c2, c3) {
    try {

        /*
                const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
                const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
                const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
        */

        const data = await Promise.all(
            [getJSON(`https://restcountries.com/v2/name/${c1}`),
                getJSON(`https://restcountries.com/v2/name/${c2}`),
                getJSON(`https://restcountries.com/v2/name/${c3}`)]);

        //console.log([data1.capital, data2.capital, data3.capital]);

        console.log(data);

    } catch (err) {
        console.error(err);
    }
}

get3Countries(`portugal`, `canada`, `tanzania`);

//Promise.race
(async function() {
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v2/name/italy`),
        getJSON(`https://restcountries.com/v2/name/egypt`),
        getJSON(`https://restcountries.com/v2/name/mexico`),
    ])
    console.log(res[0].capital);
})();

const timeout = function(sec) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
           reject(new Error(`Request took too long`)) 
        }, sec * 1000)});
};

Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    timeout(0.1)
]).then(res => console.log(res[0]))
    .catch(err => console.error(err));


Promise.allSettled([ // resolve or rejected, does not matter ...
   Promise.resolve(`success`), 
   Promise.reject  (`error`), 
   Promise.resolve(`success2`), 
]).then(res => console.log(res));

Promise.all([ // if one of them got rejected -> we get an error
    Promise.resolve(`success`),
    Promise.reject  (`error`),
    Promise.resolve(`success2`),
]).then(res => console.log(res));

Promise.any([ // if one of them got rejected -> we get an error
    Promise.resolve(`success`),
    Promise.reject  (`error`),
    Promise.resolve(`success2`),
]).then(res => console.log(res));

//
// try {
//     let y = 1;
//     const x = 2;
//     x = 3;
// } catch(err) {
//     console.error(err.message);
// }









