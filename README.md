# Get dominant colours from an image Element on a webpage
The JavaScript **"dominant.js"** script is aimed to fetch dominant colours from an image on a webpage.<br>
The JavaScript **"text_color.js"** script is aimed to get the perfect color, between white and black, to make the text readable in every circumstancies.

---
## Usage
```
<img
  id="test-image"
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
>

<div
  id="test-div"
  style="width: 200px;height: 200px;display: flex;align-items: center;justify-content: center;background: #3f52b0;"
>
  Test text
</div>

<script>
let image = document.querySelector( '#test-image' );
console.log( get_dominant_color( image, 10 ) ); // To get 10 first dominant colours of the image

console.log( "Should use : ", text_color( "#3f52b0" ), " for the text on div #test-div" );
</script>
```

---
## Warning
Some image may need a proxy to use this script !
