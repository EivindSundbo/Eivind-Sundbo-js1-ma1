const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1

const cat = {
    complaints: function(){
        console.log("Meow!")
    }
};

cat.complaints();

//Question 2

const heading = document.querySelector("h3");

heading.innerHTML = ("Updated heading")

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.classList.add("subheading")

//Question 5

 const paragraphs = document.querySelectorAll("p");

 for(let i = 0; i < paragraphs.length; i++){
     paragraphs[i].style.color = "red"
 }

//Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML += "<p>New paragraph</p>";

resultsContainer.style.backgroundColor = "yellow";

//Question 7

function catList(list){
    for(let i = 0; i < cats.length; i++){
        let catNames = list[i].name;
        console.log(catNames)
    }
}
catList(cats)

//Question 8

function createCats(){
    let html = "";
    for (let i = 0; i < cats.length; i++){
    
    let missingAge = "Age unknown";
    if(cats[i].age){
        missingAge = cats[i].age
    }

    html += `
    <div>
    <h5> name: ${cats[i].name} </h5>
    <p> age: ${cats[i].age}
    </div>
    `;
    }
    return html;
}

const returnCats = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = returnCats;