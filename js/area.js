export class Area {
  constructor() {

    $("#Area").click(() => {
          this.getArea();
          $("#sectionInput").addClass("d-none") 
    $("#contactSection").addClass("d-none");
    $("#allData").removeClass("d-none");

    });



  }

  async getArea() {
    $(".load").removeClass("d-none")

    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list `
    );
    const { meals } = await api.json();
    $(".load").addClass("d-none")

    this.displayArea(meals.slice(0, 20));

    document.querySelectorAll(".imageArea").forEach((image) =>
    image.addEventListener("click", () => {
      this.getAreaDetails(image.dataset.id);
    })
  );

  }

  displayArea(data) {
    document.getElementById("allData").innerHTML = ""
    document.getElementById("searchData").innerHTML = ""
    document.getElementById("title").innerHTML = "";


    let cartona = "";
    for (let i = 0; i < data.length; i++) {
      cartona += `
                <div class="col-md-3 p-3" >
                <div class="imageArea rounded-3 overflow-hidden position-relative text-center" data-id=${data[i].strArea}>
                    <i class="fa-solid fa-house-laptop fa-4x mb-1 text-light"></i>
                    <h2 class="text-light">${data[i].strArea}</h2>
                </div>
    
            </div>`;
    }
    document.getElementById("allData").innerHTML = cartona
  }

  async getAreaDetails(name) {
    $(".load").removeClass("d-none")

    const api = await fetch(      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`    );
    const  {meals}  = await api.json();
    $(".load").addClass("d-none")

    // this.displayCategory(meals)
    // console.log(meals);

    this.displayAreaDetails(meals.slice(0, 20), name);
  }

  displayAreaDetails(data, name) {
    document.getElementById("allData").innerHTML = "";
    document.getElementById("searchData").innerHTML = "";
    document.getElementById("title").innerHTML = "";


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
