// const data=document.getElementById("hello")
// console.log(data);

// let age=26;

// if(age>17){
//     data.style.display = 'block';
// }else{
//     data.style.display = 'none';
// }


// const container=document.getElementById('body')

// function dark(){
//     container.style.backgroundColor= 'white';
//     container.style.color= 'black';
// }

// function light(){
//     container.style.backgroundColor= 'black';
//     container.style.color= 'white';
// }

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const itemClear = document.getElementById("clear");
const itemFilter = document.getElementById("filter")

// console.log(itemInput);

function addItem(event){

    event.preventDefault();

    const newItem=itemInput.value;
    if(newItem === '') alert("Please add the item!!!!");
    else{
        const li = document.createElement('li');
    
        li.appendChild(document.createTextNode(newItem)); 



        const button = createButton("remove-item btn-link text-red");
        li.appendChild(button);

        itemList.appendChild(li);

        itemInput.value="";
    }
    checkUI();
}

function createButton(classes){
    const btn=document.createElement('button');
    btn.className = classes;
    const icon = createIcon("fa-solid fa-xmark");

    btn.appendChild(icon);

    return btn;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    icon.appendChild(document.createTextNode('*'));
    return icon;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove();
    }
    checkUI();
}

function clearItems(e){
    while(itemList.firstChild){
          itemList.removeChild(itemList.firstChild);
//        itemList.firstChild.remove();    
    }
    checkUI();
}

function checkUI(){
    const items = document.querySelectorAll('li');
    if(items.length === 0){
        itemClear.style.display='none';
        itemFilter.style.display='none';
    }else{
       itemClear.style.display='block';
       itemFilter.style.display='block'; 
    }
}

function itemFilters(e){
    const text=e.target.value.toLowerCase();
    const items=document.querySelectorAll('li');
    items.forEach((item)=>{
//        console.log(item.firstChild.textContent.toLowerCase());
        const newItem=item.firstChild.textContent.toLowerCase();
        if(newItem.indexOf(text)!=-1){
            item.style.display='flex';
        }else{
            item.style.display='none';
        }
    })
}

itemForm.addEventListener('submit',addItem);
itemList.addEventListener('click' ,removeItem);
itemClear.addEventListener('click',clearItems);
itemFilter.addEventListener('input',itemFilters);

checkUI();
