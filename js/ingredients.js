



export class Ingrediants {
    constructor(){
        
        $("#Ingrediants").click(() => {
                this.getIngre();
                $("#allData").removeClass("d-none");

          });
    }
  
        async getIngre() {
          $(".load").removeClass("d-none")
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list` );
            const { meals } = await api.json();
            $(".load").addClass("d-none")

            //  console.log(meals);
            this.displayArea(meals.slice(0, 20));
        
            document.querySelectorAll(".imageIngre").forEach((image) =>
            image.addEventListener("click", () => {
              // $("#ingrediant").addClass("d-none");
              this.getAreaDetails(image.dataset.id);
              // console.log(image.dataset.id);
            })
          );
        
          }

          
  displayArea(data) {
    document.getElementById("allData").innerHTML = ""
    document.getElementById("searchData").innerHTML = ""
    document.getElementById("title").innerHTML = "";
    $("#contactSection").addClass("d-none");

    let cartona = "";
    for (let i = 0; i < 20; i++) {
      cartona += `
                <div class="col-md-3 p-3" >
                <div class="imageIngre rounded-3 overflow-hidden position-relative text-center " data-id=${data[i].strIngredient}>
                    <i class="fa-solid fa-drumstick-bite fa-4x text-light"></i>
                    <h2 class="text-light">${data[i].strIngredient}</h2>
                    <p class="text-light">${data[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
    
            </div>`;
    }

  document.getElementById("allData").innerHTML = cartona
    }

  async getAreaDetails(name) {
    $(".load").removeClass("d-none")
    const api = await fetch(      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`    );
    const  {meals}  = await api.json();
    $(".load").addClass("d-none")

    // console.log(meals);

    this.displayIngreDetails(meals.slice(0, 20), name);
  }

  displayIngreDetails(data, name) {
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
    document.getElementById("allData").innerHTML = cartona

    document.getElementById("title").innerHTML = name;
  }
}