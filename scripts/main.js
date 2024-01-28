let dynamicImage = document.getElementById('dynamicImage');
dynamicImage.onclick = () => {
    const mySrc = dynamicImage.getAttribute('src');
    if (mySrc === 'images/image1.jpg') {
        dynamicImage.setAttribute('src', 'images/image2.png');
    } else {
        dynamicImage.setAttribute('src', 'images/image1.jpg');
    }
};

let nameButton = document.getElementById('nameButton');
nameButton.onclick = () => {
    const myName = prompt("Hi, welcome to my website! What's your name?");
    if (myName) {
        alert(`Hello ${myName}, nice to meet you!`);
    }
};
