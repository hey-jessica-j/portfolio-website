//Create a function that changes the picture based on drop down selection
//Create a function that based on drop down selection change value and link for go button

var messageText, linkText, imageTextOne, imageTextTwo, imageTextThree, imageTextFour;
var imageOne = document.getElementById("portfolio-image-one");
var imageTwo = document.getElementById("portfolio-image-two");
var imageThree = document.getElementById("portfolio-image-three");
var imageFour = document.getElementById("portfolio-image-four");
var message = document.getElementById("portfolio-text");
var link = document.getElementById("portfolio-go-button");


var updatePortfolio = function(selection) {
  if (selection == "no-selection") {
    messageText = "This is my portfolio";

  }

  else if (selection === 'rougePickings') {
    linkText = "https://www.facebook.com";
    messageText = "Rouge Pickings landing Page";
    imageTextOne = "../img/loading-bar.jpg";
    imageTextTwo = "../img/email-icon.png";


  }

  else if (selection == 'unplugged') {
    imageText = "";
    messageText = "";
    linkText = "";
  }

  else if (selection === 'lolClock') {
    messageText = "LOL-clock"
  }

  else if (selection == 'magic8Ball') {
    messageText = "Magic8Ball-game"
  }

  else if (selection == '') {
    imageText = "";
    messageText = "";
    linkText = "";
  }

  else if (selection == '') {
    imageText = "";
    messageText = "";
    linkText = "";
  }

  else if (selection == '') {
    imageText = "";
    messageText = "";
    linkText = "";
  }

  else if (selection == '') {
    imageText = "";
    messageText = "";
    linkText = "";
  }

  else {
    messageText = "Hello";
  }


  message.innerText = messageText;
  link.href = linkText;
  imageOne.src = imageTextOne;
  imageTwo.src = imageTextTwo;
  imageThree.src = imageTextThree;
  imageFour.src = imageTextFour;
};
