/** 
 * Skapa ett textfält och en knapp "Fetch data".
 * I textfältet skall man kunna ange ett nummer, 
 * som är antalet ord som skall hämtas från http://codexplained.se/lorem_text_random.php?numberOfWords= Värdet från textfältet
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://codexplained.se/lorem_text_random.php?numberOfWords=3
 * http://codexplained.se/lorem_text_random.php?numberOfWords=10
 *
 * För varje anrop, skall datan hämtas och visas i en ny listitem <li>
 */
 let input = document.getElementById('input');
 let fetchBtn = document.getElementById('fetchBtn');
 let list = document.getElementById('list');
 
 fetchBtn.addEventListener('click', function() {
    let url= ('http://codexplained.se/lorem_text_random.php?numberOfWords=' + input.value) 

    fetch (url)
    .then(response => response.text())      
    .then(data => {list.innerHTML += `<li> ${data} </li>`}) 
    .catch((error) => {console.log (error);})   
 })