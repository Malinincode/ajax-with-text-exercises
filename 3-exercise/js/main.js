/** 
 * 
 * Kopiera in din lösning från övning 2
 * Följande skall justeras
 * 
 * Datan skall läggas in i en tabell <table></table>, med 2 kolumner:
 * - Kolumn 1 skall ha rubriken "Number of words", och innehålla antalet nummer som angavs
 * - Kolumn 2 skall ha rubriken "Result", och innehålla den datan från anropet. 
 * 
 * Läs om tables
 * - HTML: https://www.w3schools.com/html/html_tables.asp
 * - CSS:  https://www.w3schools.com/css/css_table.asp
 * 
 * Varje anrop hämtar och placera datan i en ny rad, i tabellen
 * 
 * Skall ungefär se ut på följande sätt, efter 3 olika anrop har gjorts
 * |-----------------|------------|
 * | Number of words |   Result   |
 * |-----------------|------------|
 * |        3        | qwe asd ds |
 * |-----------------|------------|
 * |        1        | asd        |
 * |-----------------|------------|
 * |        2        | ewf rwer   |
 * |-----------------|------------|
 * 
 */

 let input = document.getElementById('input');
 let fetchBtn = document.getElementById('fetchBtn');
 let tableBody = document.querySelector('#table tbody');
 
 fetchBtn.addEventListener('click', function() {
    let url= ('http://codexplained.se/lorem_text_random.php?numberOfWords=' + input.value) 

    fetch (url)
    .then(response => response.text())      
    .then(data => {
       tableBody.innerHTML +=  `
         <tr>
				<td>${input.value}</td>
				<td>${data}</td>
		   </tr>
       `
      }) 
    .catch((error) => {console.log (error);})   
 })