let todoArr = [
    {
        item:'Buy milk',
        duedate:'12/12/1234',
    }
    ];
chhotu();

function aditya(){
    let input = document.querySelector('#jha1');
     let inputAj = document.querySelector('#date')
    let todoItem = input.value;
     let todoDate = inputAj.value;
     todoArr.push({item:todoItem, duedate: todoDate});
    input.value = '';
    inputAj.value = '';
    chhotu();
}

function chhotu(){
    let inputValue = document.querySelector('#aj');
    let sankalp = '';
    for(let i=0;i < todoArr.length;i++){
        let item = todoArr[i].item;
        let dueDate = todoArr[i].duedate;
       sankalp = sankalp + ` 
       <span>${item}</span>
       <span>${dueDate}</span>
       <button id="lund" onclick =" todoArr.splice(${i}, 1); chhotu();" >Delete</button>  `;
    }
    inputValue.innerHTML = sankalp;
}