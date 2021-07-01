document.getElementById("page_location").innerHTML = window.location.href;
document.getElementById("page_updated_at").innerHTML = new Date(document.lastModified);

var fortune_quotes = ["Lets not worry. Its too late now. It will always be too late, fortunately!", 
"What luck has gave you will probably leave you.",
"Is not the circumstances, but your attitude of gratitude, faith and grace, that will bring you serendipity and good fortune everyday.",
"It's bad luck not to believe in luck.",
"No windfall or good fortune comes to mortals That isnt paid for in the coin of pain."];

document.getElementById("fortune_text").innerText = fortune_quotes[Math.floor(Math.random()*fortune_quotes.length)];

function fortune_buttons(btn_color){
    var box = document.getElementById("fortune_box");
    var text = document.getElementById("fortune_text");
    if(btn_color=="green"){
        box.style.backgroundColor = "#4CAF50";
        box.style.border="3px solid #DA0037";
        text.style.color = "#233E8B";
        text.style.fontFamily = "Times New Roman";
        text.style.fontSize = "16px";
    }
    else if(btn_color=="blue"){
        box.style.backgroundColor = "#008CBA";
        box.style.border="3px solid #4CAF50";
        text.style.color = "#FFBD9B";
        text.style.fontFamily = "Calibri";
        text.style.fontSize = "18px";

    }
    else if(btn_color=="red"){
        box.style.backgroundColor = "#DA0037";
        box.style.border="3px solid #FFC107";
        text.style.color = "white";
        text.style.fontFamily = "Josefin Sans";
        text.style.fontSize = "20px";

    }
    else if(btn_color=="new_color"){
        box.style.backgroundColor = "#E7E7E7";
        box.style.border="3px solid #DA0037";
        text.style.color = "black";
        text.style.fontFamily = "Calibri";
        text.style.fontSize = "22px";
    }
}