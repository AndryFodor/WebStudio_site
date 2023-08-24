// changing envelope image
// const envelope = document.querySelector('#envelopeLI img');
// const envLI = document.querySelector('#envelopeLI');

// envLI.addEventListener("mouseover" , ()=>{
//     envelope.setAttribute('src', './images/index/envelope(hover).png');
// })

// envLI.addEventListener("mouseout" , ()=>{
//     envelope.setAttribute('src', './images/index/envelope.png');
// })

// changing smarphone image
// const smartphone = document.querySelector('#smartphoneee img');
// const smrtLI = document.querySelector('#smartphoneee');
// smrtLI.addEventListener("mouseover" , ()=>{
//     smartphone.setAttribute('src', './images/index/smartphone(hover).png');
// })

// smrtLI.addEventListener("mouseout" , ()=>{
//     smartphone.setAttribute('src', './images/index/smartphone.png');
// })

const SIZE = 24;

// SIZE має мати кількість картинок, які мають мати hover властивість. Контейнеру треба давати ім'я hoverImage{№}. У масив imagesSource записати наступними шлях спочатку до оригінальної картинки, потім до hover 

let imagesSource = [
    './images/index/envelope.png',
    './images/index/envelope(hover).png',
    './images/index/smartphone.png',
    './images/index/smartphone(hover).png',
    './images/index/instagram.png',
    './images/index/instagram(hover).png',
    './images/index/twitter.png',
    './images/index/twitter(hover).png',
    './images/index/facebook.png',
    './images/index/facebook(hover).png',
    './images/index/linkedin.png',
    './images/index/linkedin(hover).png',
    './images/index/instagram.png',
    './images/index/instagram(hover).png',
    './images/index/twitter.png',
    './images/index/twitter(hover).png',
    './images/index/facebook.png',
    './images/index/facebook(hover).png',
    './images/index/linkedin.png',
    './images/index/linkedin(hover).png',
    './images/index/instagram.png',
    './images/index/instagram(hover).png',
    './images/index/twitter.png',
    './images/index/twitter(hover).png',
    './images/index/facebook.png',
    './images/index/facebook(hover).png',
    './images/index/linkedin.png',
    './images/index/linkedin(hover).png',
    './images/index/instagram.png',
    './images/index/instagram(hover).png',
    './images/index/twitter.png',
    './images/index/twitter(hover).png',
    './images/index/facebook.png',
    './images/index/facebook(hover).png',
    './images/index/linkedin.png',
    './images/index/linkedin(hover).png',
    './images/index/reg_customer1.png',
    './images/index/reg_customer1(hover).png',
    './images/index/reg_customer2.png',
    './images/index/reg_customer2(hover).png',
    './images/index/reg_customer3.png',
    './images/index/reg_customer3(hover).png',
    './images/index/reg_customer4.png',
    './images/index/reg_customer4(hover).png',
    './images/index/reg_customer5.png',
    './images/index/reg_customer5(hover).png',
    './images/index/reg_customer6.png',
    './images/index/reg_customer6(hover).png'
],
    doc = document;
for(let i = 0; i < SIZE; i++){
    if(i === 4 || i === 8 || i === 12 || i === 16){
        continue;
    }
    let className = `hoverImage${i+1}`,
        Element = doc.querySelector(`.${className} img`),
        Container = doc.querySelector(`.${className}`);
    
    Container.addEventListener("mouseout" , ()=>{
        Element.setAttribute('src', imagesSource[i*2]);
    })
    Container.addEventListener("mouseover" , ()=>{
        Element.setAttribute('src', imagesSource[i*2+1]);
    })  
}



// Anouther method of changing facebook svg
let Elementsvg = doc.querySelectorAll(".circle-container");
let color = doc.querySelectorAll(".circle-container path");

console.log(Elementsvg, color);


for(let i = 0; i < Elementsvg.length; i++){
    Elementsvg[i].addEventListener('mouseover', ()=>{
        color[i].setAttribute('fill', '#FFF');
    })

    Elementsvg[i].addEventListener('mouseout', ()=>{
        color[i].setAttribute('fill', '#AFB1B8');
    })
}


let buttonForOpenDialog = doc.querySelector('.sec1 button'),
    modal = doc.querySelector('.sec1 dialog'),
    buttonForCloseDialog = doc.querySelector('.sec1 .close');

    buttonForOpenDialog.addEventListener('click', () => {
        modal.showModal();
    });

    buttonForCloseDialog.addEventListener('click', () => {
        modal.close();
    })