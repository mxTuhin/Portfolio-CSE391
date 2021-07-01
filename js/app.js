document.getElementById("page_location").innerHTML = window.location.href;
document.getElementById("page_updated_at").innerHTML = new Date(document.lastModified);

var fortune_quotes = ["Lets not worry. Its too late now. It will always be too late, fortunately!", 
"What luck has gave you will probably leave you.",
"Is not the circumstances, but your attitude of gratitude, faith and grace, that will bring you serendipity and good fortune everyday.",
"It's bad luck not to believe in luck.",
"No windfall or good fortune comes to mortals That isnt paid for in the coin of pain."];

document.getElementById("fortune_text").innerText = fortune_quotes[Math.floor(Math.random()*fortune_quotes.length)];