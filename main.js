const form = document.querySelector('.form');
const input = document.querySelector('.input');
const list = document.querySelector('.list');

const data = [];

form.addEventListener('submit',(e)=> {
    e.preventDefault();
    const { value } = input;
    if(input.value) {
        data.push({name:input.value,id:(Math.random())});
    }
    else if(!input.value) {
        input.style.border = '6px solid red';
    }
    input.value = ''
    render(data);
})
function editText(id,text) {
    for(let i of data) {
        if(i.id === +id) {
            if(!text) {
                return i.name
            }
            i.name = text;
        }
    }
}

function render() {
    list.innerHTML = ''
    data.forEach((el) => {
        let li = document.createElement('li')
        li.className = 'item'
        li.id = el.id
        li.innerHTML = `
        <p>${el.name}</p>
        <div>
            <button onclick = "edit(${li.id})" class="edit">edit</button>
            <button onclick = "del(${li.id})" class="del">delete</button>
        </div>
        `;
        list.append(li)
    });
}

const del = (id) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === +id) {
            data.splice(i,1)
        }
    }
    render(data)
}

const edit = (id) => {
    document.querySelector('.modal').classList.add('open')
}


