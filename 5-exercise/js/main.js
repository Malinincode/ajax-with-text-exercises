/** 
 * Skapa en knapp "Fetch data".
 * Som hämtar data från http://codexplained.se/lorem_comma_text.php
 * 
 * Datan är en Lorum Ipsum text, där varje ord är separerad med ett kommatecken
 * Se till att datan hämtas och att varje ord läggs in i en egen listItem <li>
 * 
 * Använd er av den inbyggda sträng-funktionen .split()
 */
	

 
 document.getElementById('fetchBtn').addEventListener('click', function() {
    fetch('http://codexplained.se/lorem_comma_text.php') 
    .then(response => response.text()) 
    .then(data => {
      let arrayWithAllWords= data.split(",")
      let list = document.getElementById("list");

      for (let word of arrayWithAllWords) {
      list.innerHTML += `<li>${word}</li>`;

      }

   }) 
      
})