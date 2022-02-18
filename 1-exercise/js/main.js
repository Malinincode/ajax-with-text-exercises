/** 
 * Skapa en knapp "Fetch data".
 * När man klickar på knappen, 
 * så skall texten från http://codexplained.se/lorem_text.php hämtas och visas på sidan.
 * Hämta texten med hjälp av AJAX, se kodgenomgången js-ajax-intro
 */
		
let fetchBtn = document.getElementById('fetchBtn');
let container = document.getElementById('container');

fetchBtn.addEventListener('click', function() {
    fetch('http://codexplained.se/lorem_text.php') 
    .then(response => response.text())      
    .then(data => {container.innerHTML = data})  
    .catch((error) => {console.log (error);})     
})
