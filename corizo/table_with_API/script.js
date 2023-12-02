const tableBody=document.getElementById('table-body');

const display = () =>{
    fetch("table.json")
    .then(res => res.json())
    .then(data => );

    tableData

    const newHtml=`
    
        <tr>
            <th scope="row">1</th>
            <td>Ashish</td>
            <td>Bhopal</td>
            <td>JNCT</td>
        </tr>
    
    `

    tableBody.innerHTML += newHtml;
   
}

display();
