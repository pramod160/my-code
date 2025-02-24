let container = document.getElementById('container');
console.log(container);

let data = fetch('https://api.github.com/users');

data.then((response) => {
    console.log(response);

    let result = response.json();
    // console.log(result);

    result.then((finaldata) => {
        // console.log(finaldata);
        
        let tableBody = document.querySelector('#userTable tbody');
        finaldata.map((user) => {
            let row = `
                <tr>
                    <td><img src="${user.avatar_url}" alt="Avatar"></td>
                    <td>${user.id}</td>
                    <td>${user.login}</td>
                    <td><a href="${user.html_url}" target="_blank">Profile Link</a></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    });
});
