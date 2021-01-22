function listOfNames( arrayOfPeople )
{
  let content = document.querySelector("#content");
  for ( var i = 0; i < arrayOfPeople.length; i++ )
  {
    let header = document.createElement( "h1");
    let header2 = document.createElement( "h2" );
    header.innerText = arrayOfPeople[i].name;
    header2.innerText = arrayOfPeople[i].job;
    content.appendChild( header );
    content.appendChild( header2 );
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);