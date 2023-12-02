const tableBody=document.getElementById('table-body');
const Button = document.getElementById('button');

const display = () =>{
    fetch("table.json")
    .then(res => res.json())
    .then((data) => {
        data.forEach(element => {
            const newHtml=`
    
                <tr>
                    <th scope="row">${element["Roll_No"]}</th>
                    <td>${element["Name"]}</td>
                    <td>${element["City"]}</td>
                    <td>${element["College"]}</td>
                </tr>
            
            `

            tableBody.innerHTML += newHtml;
        });
    });
};

const clicked = () => {
    display();
    Button.style.display='none';
}

Button.addEventListener('click',clicked);

