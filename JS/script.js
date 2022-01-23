//Crate html element
document.body.innerHTML = `<div class="heading-container">
<h1>Burger</h1>
<img class="icon" src="Images/Burger2.jpg" width="500" height="400">
</div>
<div id="mainContainer" class="main-container"></div>`;

//create a function to get the data
const getData = async () => {
    try{
      //fetch the url
        const data = await fetch(
          "https://bobsburgers-api.herokuapp.com/characters"
        );

        //covert data into json
        const burger = await data.json();
          //itreate the data
        mainContainer.innerHTML = "";
        burger.forEach((burgers) => {
          displayData(burgers);
        });
    }
    //error handling
    catch(err){
        console.log(err);
    }
}

//function calling
getData();

//create function for display the data 
const displayData = (obj) => {
    mainContainer.innerHTML += `
    <div class="container">
    <h3>Name:<span>${obj.name}</span></h3>
    <p>Id:<span>${obj.id}</span></p>
    <p>Gender:<span>${obj.gender}</span></p>
    <p>Hair Color: <span>${obj.hairColor}</span></p>
    <p>Occupation: <span>${obj.occupation}</span></p>
    </div>`;
};
