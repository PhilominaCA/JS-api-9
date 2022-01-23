//1.	Solving problems using array functions on rest countries data.
var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);

    //a.	Get all the countries from Asia continent /region using Filter function
    var asia_countries = data.filter((elem) => elem.region === "Asia");
    console.log(asia_countries);

    //b.	Get all the countries with a population of less than 2 lakhs using Filter function
    var Ppulation = data.filter((elem) => parseInt(elem.population) < 200000);
    console.log(Ppulation);

    //c.	Print the following details name, capital, flag using forEach function
    data.forEach((elem) =>
        console.log(`Name : ${elem.name.common}, Capital : ${elem.capital}, Flag: ${elem.flag}`));

    //d.	Print the total population of countries using reduce function
    var total_popualtion = data.reduce((accum, elem) => { return accum + elem.population }, 0);
    console.log(total_popualtion);

    //e.	Print the country which uses US Dollars as currency.
    var Currenc = data.filter((elem) => {
        for (var i in elem.currencies) {
            if (elem.currencies[i].name == "United States dollar")
                return true;
        }
    });
    console.log(Currenc);
}
