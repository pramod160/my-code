// let container = document.getElementById('container')
// console.log(container)

// let data =fetch('http://api.github.com/users')
// // console.log(data)
// data.then((response) => {
//     // console.log(response)
//     let result = response.json()
//     // console.log(result)

//     result.then((finaldata) => {
//         // console.log(finaldata)

//         finaldata.map((m) => {
//             console.log(m)
//             container.innerHTML += `
//             <div id ='cards'>
//             <img src=${(m.avatar_url)}></img>
//             <h2>${(m.id)}</h2>
//             <h1>${(m.login)}</h1>
//             <a href=${(m.url)}> Link</a>
//             </div> 
//             `
//         })
//     })
// })

// ______________________________________________________________ WITH ASYNC AWAIT

// let container = document.getElementById('container');
// console.log(container);

// (async () => {
//     try {
//         let data = await fetch('http://api.github.com/users');
//         let result = await data.json();

//         result.map(m => {
//             console.log(m);
//             container.innerHTML += `
//                 <div id='cards'>
//                     <img src='${m.avatar_url}' alt='Avatar'></img>
//                     <h2>${m.id}</h2>
//                     <h1>${m.login}</h1>
//                     <a href='${m.url}'>Link</a>
//                 </div>
//             `;
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// })();


//! PRACTICE ____________________________________________________________

let container = document.getElementById("container");
console.log(container);

let data = fetch("http://api.github.com/users");

data.then((response)=>{
    console.log(response);

    let result = response.json();
    console.log(result);

    result.then((apires)=>{
        console.log(apires);

        apires.map((card)=>{
        console.log(card);

            container.innerHTML +=`
            <div id="cards"> 
            <img src=${(card.avatar_url)}></img>
            <h2>${(card.id)}</h2>
            <h1>${(card.login)}</h1>
            <a href =${(card.url)}>Link</a>
            </div>
            ` 
        });
    });
});