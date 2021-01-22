function shoppingList( thingsToBuy )
{
  
  let allList = document.createElement( "ul" );
  for ( let i = 0; i < thingsToBuy.length; i++ )
  {
    let toBuy = document.createElement( "li" );
    toBuy.innerText = thingsToBuy[i];
    allList.appendChild( toBuy );
  }
  document.querySelector( "#content" ).appendChild( allList );
  
  // Write your code here...
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
