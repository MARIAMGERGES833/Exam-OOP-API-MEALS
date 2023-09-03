import { Datahome } from "./datahome.js";
import { Category } from "./category.js";
import { Area } from "./area.js";
import { Ingrediants } from "./ingredients.js";
import { Contact } from "./contactUs.js";
// import { Description } from "./description.js";

export class Home {
  constructor() {
     this.Datahome = new Datahome()
     
    this. hideInnerNav()
    this.category = new Category();
    this.area = new Area();
    this.ingrediants = new Ingrediants();
    this.contact = new Contact();



    $(".fa-xmark").click(()=> {
      this.disappearNavbar();
    });

   

    $(".fa-bars").click(()=> {
      $(".fa-bars").css("display", "none");
      $(".fa-xmark").css("display", "block");
      $(".navSide").animate({ left: "0" }, 700)
        $(".nav-link").fadeIn(700);
      
    });


    // ==========select All links of nav bar=============
    let linkA = document.querySelectorAll(".nav-link");
    for (let i = 0; i < linkA.length; i++) {
      $(linkA[i]).click(() => {
        let linkNotSelected = document.querySelector(".active");
        linkNotSelected.classList.remove("active");
        linkA[i].classList.add("active");

        this.disappearNavbar();
      });
    }

    
  

    $(document).ready(() => {

      $(".loader").fadeOut(2000, () => {
        $(".load").slideUp(2000, () => {
          // $("body").css("overflow", "auto");
          // $("#contactSection").addClass("d-none");
          this.Datahome.getData()
        
        });
      });
    });

  
  }

  disappearNavbar() {
    $(".fa-bars").css("display", "block");
    $(".fa-xmark").css("display", "none");
    $(".nav-link").fadeOut(500, () => {
      this.hideInnerNav();
    });
  }

  hideInnerNav() {
    const navSideWidth = $(".navInner").outerWidth();
    $(".navSide").animate({ left: -navSideWidth }, 500);
  }
}
