/** 
 * Skapa en knapp "Fetch data".
 * Som hämtar data från http://codexplained.se/lorem_comma_text.php
 * 
 * Datan är en Lorum Ipsum text, där varje ord är separerad med ett kommatecken
 * Se till att datan hämtas och att varje ord läggs in i en egen listItem <li>
 * 
 * Använd er av den inbyggda sträng-funktionen .split()
 */
	
 let fetchBtn = document.getElementById('fetchBtn');
 let list = document.getElementById('list');
 let textReturn = document.getElementById('textReturn');
 
 fetchBtn.addEventListener('click', function() {
    fetch('http://codexplained.se/lorem_comma_text.php') 
    .then(response => response.text()) 
    .then(textReturn => textReturn.split(" "))
    .then(data => {list.innerHTML = `<li> ${data} </li>`}) 
    .catch((error) => {console.log (error);})     
 })