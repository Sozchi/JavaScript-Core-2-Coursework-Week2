function highlightWords(paragraph, colours) {
  function dropDownColors( colours )
  {
    var dropDownLabel = document.createElement( "label" ); //drop down label
    label.innerHTML = "choose a colour: "; label.for = "colours";
    
    var list = document.createElement( "select" ); //drop down list
    list.Id = "colours";

    //option tags
    for ( var i = 0; i < colours.length; i++ )
    {
      var item = document.createElement( "options" );
      item.innerHTML = colours[i].toUpperCase();

      list.appendChild( item );
    }

    var dropDown = {
      label: dropDownLabel,
      select: list
    };

    return dropDown;
  }

  function paraWithSpan( paragraph )
  {
    var word = paragraph.split( "" );
    var tag = document.createElement( "p" );

    for(var i = 0; i < word.length; i++) {
      var wordSpan = document.createElement( "span" );
      wordSpan.innerHTML = word[i] + "";
      
      tag.appendChild( wordSpan );
    }
    return tag;
  }

  function paraEventListener( tag, dropDown )
  {
    var paraSpans = tag.childNodes;
    for ( var i = 0; i < paraSpans.length; i++ )
    {
      paraSpans[i].addEventListener( "click", function ()
      {
        if ( dropDown.select.value.toLowerCase() === "none" )
        {
          this.style.backgroundColor = "";
        } else
        {
          this.style.backgroundColor = dropDown.select.value;
        }
      } );
    }
  }

  function highlightWords( paragraph, colours )
  {
    var content = document.getElementById( "content" );
    var dropDown = coloursDropDown( colours );
    var tag = paraWithSpan( paragraph );
    paraEventListener( tag, dropDown );

    content.appendChild( tag );
    content.appendChild( dropDown.label );
    content.appendChild( dropDown.select );
  }

}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
