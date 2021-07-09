const addForm = document.querySelector('.add');
const todos = document.querySelector('.todos');
const search = document.querySelector('.search input');
const todosFunction = (value)=>{

    // console.log(todos.innerHTML);
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${value}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;
    todos.innerHTML += html;
}

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.add.value.trim();//trim() is use remove the starting and ending  blank spaces.  
    if (value.length){
        todosFunction(value);
        addForm.reset();
    }
});
// console.log(a);

//delete todos...

todos.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

//Serach Todos......

const filterTodos=(list)=>{
    Array.from(todos.children)
        .filter((a) =>!a.textContent.toLowerCase().includes(list))
        .forEach((a)=>a.classList.add('filterd'));
    Array.from(todos.children)
        .filter((a) =>a.textContent.toLowerCase().includes(list))
        .forEach((a)=>a.classList.remove('filterd'));

}
search.addEventListener('keyup',()=>
{
    const value=search.value.trim().toLowerCase();
    console.log(value);
    filterTodos(value);
})