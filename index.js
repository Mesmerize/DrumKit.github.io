// PopUp Message When User Refreshes Site
swal("Welcome To The Drum Kit Game!", "To Start All You Need To Do is Click on an Image or Press a Key.")

// We declare an array like variable to retrieve every drum class element
var arrayElements = document.getElementsByClassName("drum");

// Declaring audio file
var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio5 = new Audio('sounds/snare.mp3');
var audio6 = new Audio('sounds/crash.mp3');
var audio7 = new Audio('sounds/kick-bass.mp3');

/********** DETECTING CLICK SOUND **********/

// For loop that iterates through the array variables length
// and adds event listener to each drum class element
for(var i = 0; i < arrayElements.length; i++)
{
    arrayElements[i].addEventListener("click",handleClick);
}

function handleClick()
{
    //alert("I got clicked 😏");
    //audio.play();
    //this.style.color = "white";

    // Variable Declared to Detect the Key Stroke Inside the HTML
    var btnHtml = this.innerHTML;

    // Function call to the inner HTML to match the Key Click with the Switch Statements
    keyDetect(btnHtml);
    buttonAnimation(btnHtml);

}

/********** DETECTING Key Stroke SOUND **********/

document.addEventListener("keypress", function(event)
{
    // Listens for the specific Key Stroke
    keyDetect(event.key);
    buttonAnimation(event.key);
})

function keyDetect(keyStroke)
{

    switch(keyStroke)
    {
        case 'w': 
        audio1.play();
        break;
        case 'a': 
        audio2.play();
        break;
        case 's': 
        audio3.play();
        break;
        case 'd': 
        audio4.play();
        break;
        case 'j': 
        audio5.play();
        break;
        case 'k': 
        audio6.play();
        break;
        case 'l': 
        audio7.play();
        break;

        default: console.log(n);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    // Adds Selected Style
    activeButton.classList.add("pressed")

    // Removes Selected Style after 1s
    setTimeout(function()  {
        activeButton.classList.remove("pressed");
    }, 100);
}