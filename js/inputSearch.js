export class SearchInputs {
  constructor() {
    this.searchNameValue = document.getElementById("searchName");
    this.searchLetterValue = document.getElementById("searchLetter");

    this.searchNameValue.addEventListener("keyup", () => {
      this.getName(this.searchNameValue.value);
      console.log(this.searchNameValue.value);
    });
    this.searchLetterValue.addEventListener("keyup", () => {
      this.getLetter(this.searchLetterValue.value);
      console.log(this.searchLetterValue.value);
        
    });
    
    $("#search").click(() => {
       console.log(`search`)
  
    
    
            $("#contactSection").addClass("d-none");
            $("#allData").addClass("d-none");
            $("#sectionInput").removeClass("d-none");
            $("#sectionInput").addClass("d-block");


    });
  }

  async getName(name) {
    $(".load").removeClass("d-none")
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const { meals } = await api.json();
    $(".load").addClass("d-none")
    this.displaySearchByName(meals.slice(0, 20));
    console.log(meals);
  }

  async getLetter(letter) {
    $(".load").removeClass("d-none")
    const api = await fetch(      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`    );
    const { meals } = await api.json();
    $(".load").addClass("d-none")
    this.displaySearchByName(meals.slice(0, 20));
    console.log(meals);
  }

  displaySearchByName(data) {
    document.getElementById("searchData").innerHTML = ""
    document.getElementById("title").innerHTML = "";


    
    let cartona = ``;
    for (let i = 0; i < data.length; i++) {
      cartona += `
            <div class="col-md-3" data-id=${data[i].idMeal}>
            <div class="image rounded-3 overflow-hidden position-relative">
                <img src="${data[i].strMealThumb}" class="w-100">
            <div class="caption d-flex align-items-center p-2 ">
                <h2>${data[i].strMeal}</h2>
            </div> 
         </div>
    </div>`;

    
    document.getElementById("searchData").innerHTML = cartona

}

    
  }


 
}
