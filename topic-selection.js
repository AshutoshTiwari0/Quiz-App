const dropdown = document.getElementById("dropdown");
let text = dropdown.options[dropdown.selectedIndex].text;
const map = new Map();
let urlValue=map.get(text);
map.set("General Knowledge", 9);
map.set("History", 23);
map.set("Geography", 22);
map.set("Music", 12);
map.set("Art", 25);
map.set("Gadgets", 30);
map.set("Video Games", 15);
map.set("Maths", 19);
map.set("Computers", 18);

// Listen for dropdown changes
dropdown.addEventListener("change", function() {
    text = dropdown.options[dropdown.selectedIndex].text;
    console.log(text);
    console.log(`value for url is ${map.get(text)}`);
    urlValue=map.get(text);
});


/*GK CATEGORY 9
*History category 23
*Geography category 22
*Music category 12
*Art 25
*Gadgets 30
*Video Games 15
*Maths 19
*Computers 18
*/ 

async function getData()
{
    const url=`https://opentdb.com/api.php?amount=10&category=${urlValue}`;
    console.log(`url is ${url}`);
    try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    console.log(result);
    } 
    catch (error) {
    console.error(error.message);
    }
}

//on clicking generate quiz call getData()
const button=document.getElementById('generate')
button.addEventListener('click',function(e)
{
    getData();

    //go to new page 
    window.location.href = "quiz.html";
});

