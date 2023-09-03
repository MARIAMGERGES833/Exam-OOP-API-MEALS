import { SearchInputs } from "./inputSearch.js";
import { Description } from "./description.js"

export class Datahome {
  constructor() {
    //  this.getData()
         this.searchInputs = new SearchInputs();
    //         $("#contactSection").addClass("d-none");
    // $("#sectionInput").addClass("d-none");
           
  }
  async getData() {
    $(".load").removeClass("d-none")
  

    const api = await fetch(      "https://www.themealdb.com/api/json/v1/1/search.php?s=    "    );
    const { meals } = await api.json();
    $(".load").addClass("d-none")
    this.displayAllData(meals);


    document.querySelectorAll(".image").forEach(image =>
      image.addEventListener("click", ()=> {
        new Description(image.dataset.id)

      })
    )
  }

  displayAllData(data) {
    document.getElementById("allData").innerHTML = ""
    document.getElementById("searchData").innerHTML = ""
    let cartona = "";
    for (let i = 0; i < data.length; i++) {
      cartona += `
            <div class="col-md-3 ima" >
            <div class="image rounded-3 overflow-hidden position-relative" data-id=${data[i].idMeal}>
                <img src="${data[i].strMealThumb}" class="w-100">
            <div class="caption d-flex align-items-center p-2 ">
                <h2>${data[i].strMeal}</h2>
            </div> 
            </div>

        </div>`;
    }
    document.getElementById("allData").innerHTML = cartona;
  }


 

}
