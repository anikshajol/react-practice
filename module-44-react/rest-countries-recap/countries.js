const loadData = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
   
};

const displayCountries = (countries) => {
  console.log(countries);
  const allCountriesHTML = countries.map((country) => getCountryHTML(country));

  const container = document.getElementById("countries");

  container.innerHTML = allCountriesHTML.join("");

  // console.log(allCountriesHTML[0])
};

const getCountryHTML = ({name,flags,region}) => {

   
    const {common} = name
    const {png} = flags;



  

  return `
        <div class= "country">
        <h2>${common}</h2>
        <p>${region}</p>
            <img src="${png}" alt="">
        </div>

    `;



};

loadData();


const student = {
    name: 'anik',
    age: 29
}


let ul = `<li>Programming<li>`; ul +=  `<li>Hero<li>`; 

console.log(ul)

