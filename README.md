# Get dominant colours from an image Element on a webpage
This JavaScript script aimed to fetch dominant colours from an image on a webpage.

---
## Usage
```
<img
  id="test-image"
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
>

<script>
let image = document.querySelector( '#test-image' );
console.log( get_dominant_color( image, 10 ) ); // To get 10 first dominant colours of the image
</script>
```

---
## Warning
Some image may need a proxy to use this script !
