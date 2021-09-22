<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Exercise #2: Changing colors</title>
    <style>
      #mydiv {
        width: 200px;
        height: 200px;
        border: 1px solid black;
      }
    </style>
    <script>
      /* TODO: write JS code here */
      function change() {
        // set a colors string array of blue, red, green
        // created a variable of i setting to 0, for iterations
        let colors = ["blue", "red", "green", "blue", "purple", "cyan", "white", "black", "yellow", "orange"]
        i = 0;

        // grab the div and save it to a variable
        let elementToChange = document.getElementById("mydiv");

        i = Math.floor(Math.random() * colors.length);

        elementToChange.addEventListener("click", function(event) {
          elementToChange.style.backgroundColor = colors[i];
        })
      }
    </script>
  </head>
  <body>
    <div id="mydiv" onclick="change()"></div>
  </body>
</html>



<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random -->

<!-- https://www.w3schools.com/JS/tryit.asp?filename=tryjs_random_0_9 -->
