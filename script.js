// assigning the parent div to variable
const par_div = document.querySelector("#parent_div");
// creating function that takes the number of children divs and create them
function create_divs (num=16) {
    num = Math.floor(num)
    if (num > 0 && num <= 100) {
        num = num;
    }
    else if (num > 100) {
        alert("Maximum number of squres is 100") 
        num = 100;  
    }
    else {
        alert("Negative numbers are not valid")
        num = 16;
    };
    par_div.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    par_div.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (i=0; i < (num*num); i++) {
        const div = document.createElement('div');
        div.className = "grid-box";
        par_div.appendChild(div);
    };

};
// calling the function to create the grid
create_divs();

//  the background color var
let bg_color = "#000000"
// event listener for choosing random color
let rndm_color = document.querySelector("#rndm_color");
rndm_color.addEventListener('click', ()=> bg_color = `#${Math.floor((Math.random()*10))}${Math.floor((Math.random()*10))}${Math.floor((Math.random()*10))}${Math.floor((Math.random()*10))}${Math.floor((Math.random()*10))}${Math.floor((Math.random()*10))}`);

// event listener for choosing different color
let color_menu = document.querySelector("#choose_color");
let inp_color_choose = color_menu.value;
color_menu.addEventListener('change', () => inp_color_choose = color_menu.value);

let chos_color = document.querySelector("#conf_diff_color");
chos_color.addEventListener('click', ()=> bg_color = inp_color_choose);

// event listener for changing background color on hovering

function color(e) {
    e.target.style.background = bg_color;
};
let boxes = document.querySelectorAll(".grid-box");
boxes.forEach((box) => box.addEventListener('mouseover', color));

//event listner for resetting the grid
let reset = document.getElementById("reset_grid");
console.log(reset)
reset.addEventListener('click', function() {
    while(par_div.firstChild)  {
        par_div.removeChild(par_div.firstChild);
    }
    num_boxes = prompt("How many boxes in a line?");
    create_divs(num_boxes)
    boxes = document.querySelectorAll(".grid-box");
    boxes.forEach((box) => box.addEventListener('mouseover', color));

});

