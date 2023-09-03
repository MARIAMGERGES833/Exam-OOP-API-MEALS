 import {Datahome} from "./datahome.js"
 let cat = new Datahome()



 export class Category {
      constructor() {
        $("#Category").click(() => {
                this.getCategory()
                $("#sectionInput").addClass("d-none") 
                $("#allData").removeClass("d-none");

        });
      

    }




    async getCategory (){
      $(".load").removeClass("d-none")
      const api = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      const {categories} = await api.json();
      $(".load").addClass("d-none")
      this.displayCategory(categories) 


      document.querySelectorAll(".imag").forEach(image =>
        image.addEventListener("click", ()=> {
     this.getCategoryDetails(image.dataset.id)
  
  
        })
      )
    }

   
      
    



    displayCategory(data) {
      document.getElementById("allData").innerHTML = ""
      document.getElementById("searchData").innerHTML = ""
      $("#contactSection").addClass("d-none");


          let cartona = ``;
      for (let i = 0; i < data.length; i++) {
        cartona += `
              <div class="col-md-3">
              <div class="imag rounded-3 overflow-hidden position-relative"  data-id=${data[i].strCategory}>
                  <img src="${data[i].strCategoryThumb}" class="w-100" >
              <div class="caption  p-1 text-center">
                  <h2>${data[i].strCategory}</h2>
                  <p>${data[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
              </div> 
           </div>
      </div>`;
      
    }
      document.getElementById("allData").innerHTML = cartona
      document.getElementById("title").innerHTML = "Category";




  }
  async getCategoryDetails (name){
    $(".load").removeClass("d-none")

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    const {meals} = await api.json();
    $(".load").addClass("d-none")

    // this.displayCategory(meals) 
    console.log(meals)

   
    this.displayAllData(meals,name)

     
    
  }

  displayAllData(data , name) {
    document.getElementById("allData").innerHTML = ""
    document.getElementById("searchData").innerHTML = ""
    document.getElementById("title").innerHTML = "";
    $("#contactSection").addClass("d-none");


    let cartona = "";
    for (let i = 0; i < data.length; i++) {
      cartona += `
            <div class="col-md-3 ima" >
            <div class="image rounded-3 overflow-hidden position-relative" >
                <img src="${data[i].strMealThumb}" class="w-100">
            <div class="caption d-flex align-items-center p-2 ">
                <h2>${data[i].strMeal}</h2>
            </div> 
            </div>

        </div>`;
    }
    document.getElementById("allData").innerHTML = cartona;
    document.getElementById("title").innerHTML = name;
  }
}

  

