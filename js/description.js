import {Datahome} from "./datahome.js"


export class Description {
    constructor(id){
 
        this.getDetails(id) ;
console.log()

    }
    async getDetails(id){
           const api = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         const {meals} = await api.json();
        $(".load").addClass("d-none")


       
        //  console.log(meals)  
         this.displayDetails(meals)  
  }




  displayDetails(data){
    document.getElementById("allData").innerHTML = ""
    document.getElementById("searchData").innerHTML = ""
    document.getElementById("title").innerHTML = "";
    // $("#contactSection").addClass("d-none");

      let recipes = ""
    for (let i = 1; i <= 20; i++) {
      let ingredients = `strIngredient${i}`
      let Measure = `strMeasure${i}`
           if(data[0][ingredients] != "" ){
             recipes += `<li class="badge bg-info fs-6 me-2 mb-2">${data[0][ingredients]}  ${data[0][Measure]}</li>`
           }
    }


    let tags=""
    for (let i = 0; i < 21; i++) {
    //  let ele =   strTags    
    }
        const item = `      
     
            <div class="col-md-4 text-light">
               <img class="w-100 rounded-3 shadow" src= ${data[0].strMealThumb}>
               <h2 class="text-light">${data[0].strMeal}</h2>
            </div>
            <div class="col-md-8">
            <h2 class=" text-light">Instructions </h2>
               <p>${data[0].strInstructions}</p>
               <h3>Area : ${data[0].strArea}</h3>
               <h3>Category : ${data[0].strCategory}</h3>
               <h3 id ="recipes">Recipes  :</h3>
               <ul class="d-flex flex-wrap">
               ${recipes}
               </ul>
               <h3>Tags  : <span class="badge bg-danger fs-4">${data[0].strTags == null ?  " " : data[0].strTags }</span></h3>
               <a target="_blank" href="${data[0].strSource}" class="btn btn-success">Source</a>
               <a target="_blank" href="${data[0].strYoutube}" class="btn btn-danger">Youtube</a>
            
      </div>`
          document.getElementById("allData").innerHTML = item

         
     }


    
}