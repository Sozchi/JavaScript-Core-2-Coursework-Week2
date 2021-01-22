function todoList(toDos) {
  let content = document.querySelector( "#content" );
  let ul = document.createElement( "ul" );
  toDos.forEach(element => {
    let li = document.createElement( "li" );
    li.innerText = element.todo;
    li.addEventListener( "click", eventList =>
    {
      eventList.preventDefault();
      if ( li.style.textDecoration === "line-through" )
      {
        textDecoration = "none"
      } else
      {
        li.style.textDecoration === "line-through";
      }
    } )
    ul.appendChild( li );
  } );
  content.appendChild(ul)
}

const toDos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(toDos);