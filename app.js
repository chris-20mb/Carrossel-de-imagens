//Local reviews data
const reviews = [
    {
        id: 1,
        name: "Rogério",
        job: "web developer",
        img: "https://profile-images.xing.com/images/2d01ab70f0dd6b45eb947b39aa107df8-1/lucas-hainke.1024x1024.jpg",
        text: "Rogério é um desenvolvedor web com mais de 5 anos de experiência em criar websites e aplicações web. Ele tem um forte compromisso com a eficiência, responsividade e segurança em todos os projetos que participa.",
    },
    {
        id: 2,
        name: "Maria Fernandes",
        job: "web designer",
        img: "https://i.pinimg.com/originals/8f/7a/03/8f7a0302bf80edf8ac3a596a766d8bb9.jpg",
        text: "Maria Fernandes é uma web designer com mais de 6 anos de experiência. Sua paixão é combinar estética com funcionalidade para garantir que os usuários visitem seus sites.",
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item 
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentItem);
});


// sshow person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


// show next person

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// desafio desenvolver o random button para selecionar uma pessoa aleatória