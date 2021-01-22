function listOfColours( colours )
{
  let content = document.querySelector( "#content" );
  let selectEl = document.createElement( "select" );
  let paraEl = document.createElement( "p" );
  colours.forEach( el =>
  {
    let option = document.createElement( "option" );
    option.value = el;
    option.innerText = el;
    selectEl.appendChild( option );
    selectEl.addEventListener( "click", evList =>
    {
      evList.preventDefault();
      console.log( evList.target.value );
      if ( evList.target.value === el )
      {
        paraEl.innerHTML = `You choose: ${el}`
      }
    })
  } )
  content.appendChild( paraEl );
  content.appendChild( selectEl );
  // Write your code here...
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
