let btn = document.getElementById("btn");
let container = document.getElementById('container');

btn.addEventListener("click", async () => {
    let apiKey = 'ad9931d91deffec2a6fff8b60c5f799f';
    let city = document.getElementById("city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        let data = await fetch(apiUrl);
        console.log(data);
        let finalData = await data.json();
        console.log(finalData);

        if (finalData.cod == 200) {
            container.innerHTML = `
            <h1>CityName : ${finalData.name}</h1> 
            <h2>Temp : ${finalData.main.temp}</h2>
            <h2>Description : ${finalData.weather[0].description}</h2>
            <h2>Country : ${finalData.sys.country}</h2>
                        <h2>Feels Like : ${finalData.main.feels_like}</h2>             <h2>Humidity : ${finalData.main.humidity}</h2>
            `;
        } else {
            alert("Please enter a valid city name");
        }

    } catch (error) {
        console.error(error);
    }
});

//!MOVIE FETCHING API

console.log("hii");
let bt = document.getElementById("btnn")
console.log(bt);
let containers = document.getElementsByClassName("containers")[0]; //?as this returns an HTMLCollection, not a single element. else we can use id()next line.
// let container = document.getElementById("container")
console.log(container);


bt.addEventListener("click", async()=>{
    try {
    let apikey = "f6f4d7f5";
    let movie = document.getElementById("movie").value;
    // let apiUrl=`https://www.omdbapi.com/?apikey=${apikey}&t=${movie}`
    let apiUrl=`http://www.omdbapi.com/?t=${movie}&apikey=${apikey}`;

    containers.innerHTML = "<p>Loading...</p>";

    let data = await fetch(apiUrl)
    console.log(data);

    let finalData = await data.json()
    console.log(finalData);

    if (finalData.Response === "True") {
    containers.innerHTML = 
    `
    <h1>MovieName: ${finalData.Title}</h1>
    <h2>MovieActors: ${finalData.Actors}</h2>
    <h3>plot : ${finalData.Plot}</h3>
    <img src ="${finalData.Poster}" $></img>
    `;
    } else {
            alert("Please enter a valid movie name");
    }
    } catch (error) {
                console.error(error);
    }

});

// ____________________________________________________________________

//todo   practice code
// let button = document.getElementById("btn");
// let container = document.getElementById("container");


// button.addEventListener("click", async()=>{
//     let apiKey ="ad9931d91deffec2a6fff8b60c5f799f";
//     let city = document.getElementById("city").value;
//     let apiURL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     try {
//         let data = await fetch(apiURL);
//         console.log(data);
//         let finalData = await data.json();
//         console.log(finalData);
    
//         if(finalData.cod == 200){
//             container.innerHTML =`
//             <h1> CityName: ${finalData.name}</h1>
//             <h1> Temp: ${finalData.main.temp}</h1>
//             <h1> Description: ${finalData.weather.description}</h1>
//             <h1> Country: ${finalData.sys.country}</h1>`;
//         }else{
//     console.log("Please enter a valid name")
//     document.write("Please enter the valid name");
//     }
//     } catch (error) {
//         console.log(error);
//     }
// })
