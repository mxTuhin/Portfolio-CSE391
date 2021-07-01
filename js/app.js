document.getElementById("page_location").innerHTML = window.location.href;
document.getElementById("page_updated_at").innerHTML = new Date(document.lastModified);

var fortune_quotes = ["Lets not worry. Its too late now. It will always be too late, fortunately!", 
"What luck has gave you will probably leave you.",
"Is not the circumstances, but your attitude of gratitude, faith and grace, that will bring you serendipity and good fortune everyday.",
"It's bad luck not to believe in luck.",
"No windfall or good fortune comes to mortals That isnt paid for in the coin of pain."];

document.getElementById("fortune_text").innerText = fortune_quotes[Math.floor(Math.random()*fortune_quotes.length)];

var box = document.getElementById("fortune_box");
var text = document.getElementById("fortune_text");
function fortune_buttons(btn_color){
    
    if(btn_color=="green"){
        changeProps("#4CAF50", "3px solid #DA0037", "#233E8B", "Times New Roman", "16px");
    }
    else if(btn_color=="blue"){
        changeProps("#008CBA", "3px solid #4CAF50", "#FFBD9B", "Calibri", "18px");
    }
    else if(btn_color=="red"){
        changeProps("#DA0037", "3px solid #FFC107", "white", "Josefin Sans", "20px");
    }
    else if(btn_color=="gray"){
        changeProps("#E7E7E7", "3px solid #DA0037", "black", "Roboto", "22px");
    }
}

function changeProps(bColor, boColor, fColor, family, fSize){
        box.style.backgroundColor = bColor;
        box.style.border=boColor;
        text.style.color = fColor;
        text.style.fontFamily = family;
        text.style.fontSize = fSize;
}