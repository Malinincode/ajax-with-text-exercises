/** 
 * Skapa 2 knappar, "Previous" och "Next"
 * Dessa knappar anropar samt skickar in ett värde samtidigt, som endast får vara en siffra mellan 0-4
 * Exempel:
 * - Om nuvarande värde är 2, då anropar "Next"-knappen med värde 3
 * - Om nuvarande värde är 1, då anropar "Previous"-knappen med värde 0
 * - Om nuvarande värde är 4 och "Next"-knappen trycks, här får ni välja mellan att inte göra något, eller räkna om från 0.
 * Knapparna anropar och hämtar data från http://codexplained.se/animals.php?animal= Värdet som anges. Se exemplen nedan
 * 
 * 
 * Undersök vad som visas i webbläsaren, med följande URLer:
 * http://codexplained.se/animals.php?animal=4
 * http://codexplained.se/animals.php?animal=0
 *
 * Datan är en sträng som är separerad med tecknet *
 * Hämta datan och placera in de olika delarna i:
 * <h1>
 * <i>
 * <p>
 * <im>
 * 
 * Exempel på hur datan delas upp och läggs in i HTML-elementen:
 * 
 * <h1>Slear</h1>
 * <i>A cross between a bear and a sloth</i>
 * <p>Lorum ipsum .......</p>
 * <img src="http://i.imgur.com/MPE8L7D.jpg"> 
 * 
 */
	
let number = 1;

document.getElementById("preBtn").addEventListener("click", function() {

  if(number >= 0) {
      number--;
      if(number == -1) {
        number = 4;
      }
      fetch(`http://codexplained.se/animals.php?animal=${number}`)
      .then(response => response.text())

      .then(data => {
          let splitData = data.split("*");

          let content = document.getElementById("content");
          content.innerHTML = `
          <h1>${splitData[0]}</h1>
          <i>${splitData[1]}</i>
          <p>${splitData[2]}</p>
          <img src="${splitData[3]}">
          `;

      })

  }

})

document.getElementById("nextBtn").addEventListener("click", function() {

  if(number <= 4) {
      number++;
      if(number == 5) {
        number = 0;
      }
      fetch(`http://codexplained.se/animals.php?animal=${number}`)
      .then(response => response.text())

      .then(data => {
          let splitData = data.split("*");
          let content = document.getElementById("content");
          content.innerHTML = `
          <h1>${splitData[0]}</h1>
          <i>${splitData[1]}</i>
          <p>${splitData[2]}</p>
          <img src="${splitData[3]}">
          `;

      })

  }

})
