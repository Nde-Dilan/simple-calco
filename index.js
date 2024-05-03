var myBtn = document.querySelector(".myBtn");

var firstInputElement = document.querySelector(".first");
var secondInputElement = document.querySelector(".second");

var resultElement = document.querySelector('.result')
var result = 0;



// console.log(myBtn)

// Events

myBtn.addEventListener("click", 

function IwasClicked(){
    // alert("Hello, Welcome user")

    // console.log(firstInputElement.value);
    // console.log(secondInputElement.value);

    // 4 -> "4" -> 4

    var a = parseInt(firstInputElement.value);
    var b = parseInt(secondInputElement.value);

    console.log(a, b);
    
    result = a + b;

    // alert(result);

    resultElement.textContent = result;

}

)



// Calculator

/*
 * +,-,*,/ 2 nums
 * get 2 nums  from the user
 * we want to return the result to the user
*/