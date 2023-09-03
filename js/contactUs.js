

export class Contact {
    constructor(){
        $("#Contact").click(() => {
            document.getElementById("title").innerHTML = "";
            document.getElementById("searchData").innerHTML = "";
    
            $("#contactSection").removeClass("d-none");
            $("#contactSection").addClass("d-block");
            $("#allData").addClass("d-none");
            $("#sectionInput").addClass("d-none");

            
            // console.log(`contact`)
      });
        

        this.inputNameFocus = false
        this.inputPhoneFocus = false
        this.inputPassFocus = false
        this.inputAgeFocus = false
        this.inputRepassFocus = false
        this.inputEmailFocus = false
        
 




        




      


        document.getElementById("inputName").addEventListener("focus", () => {
            this.inputNameFocus = true
        })
        
        document.getElementById("inputEmail").addEventListener("focus", () => {
            this.inputEmailFocus = true
        })
        
        document.getElementById("inputPhone").addEventListener("focus", () => {
            this.inputPhoneFocus = true
        })
        
        document.getElementById("inputAge").addEventListener("focus", () => {
            this.inputAgeFocus = true
        })
        
        document.getElementById("inputPassword").addEventListener("focus", () => {
            this.inputPassFocus = true
        })
        
        document.getElementById("inputRepassword").addEventListener("focus", () => {
            this.inputRepassFocus = true
        })

        document.getElementById("inputName").addEventListener("keyup", () => {
            document.getElementById("spanname").classList.remove( "d-none")
            document.getElementById("spanemail").classList.remove( "d-none")
            document.getElementById("apanphone").classList.remove( "d-none")
            document.getElementById("spanage").classList.remove( "d-none")
            document.getElementById("spanpassword").classList.remove( "d-none")
           this.inputsValidation()
        //    console.log(`keyup input name`)
               })
     
        
        document.getElementById("inputPhone").addEventListener("keyup", () => {
            this.inputsValidation()
        })
        document.getElementById("inputPassword").addEventListener("keyup", () => {
            document.getElementById("spanrepassword").classList.remove( "d-none")

            this.inputsValidation()
        })
         document.getElementById("inputRepassword").addEventListener("keyup", () => {
            this.inputsValidation()
        })
        document.getElementById("inputEmail").addEventListener("keyup", () => {
            this.inputsValidation()
        })
        document.getElementById("inputAge").addEventListener("keyup", () => {
            this.inputsValidation()
        })
        

    }

        nameValidation() {
        // console.log(`validatename`);
        let reg = /^[A-Za-z\d_\s]{3,}$/ ;
        let trueName = reg.test(document.getElementById("inputName").value);
        return (trueName);
        }
        
         emailValidation() {
        return (( /^[\w\@]{3,}\.com$/).test(document.getElementById("inputEmail").value))
        }
        
         phoneValidation() {
        return (/^01[0125][0-9]{8}$/.test(document.getElementById("inputPhone").value))
        }
        
         ageValidation() {
        return (/^[0-9]{0,3}$/.test(document.getElementById("inputAge").value))
        }
        
         passwordValidation() {
        return (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(document.getElementById("inputPassword").value))
        }
        
         repasswordValidation() {
        return (document.getElementById("inputRepassword").value == document.getElementById("inputPassword").value)
        }


           
        
 inputsValidation() {
    // console.log(`contact`)
    if (this.inputNameFocus) {
        // console.log(`right`)
        if (this.nameValidation() == true) {
// console.log(`done`)

            document.getElementById("spanname").classList.add( "d-none");
            document.getElementById("spanemail").classList.add( "d-none");

    
        } else {
            document.getElementById("spanname").classList.add( "d-block")
    
        }
    }
    if (this.inputEmailFocus) {
    
        if (this.emailValidation() == true) {
            document.getElementById("spanemail").classList.add( "d-none")
        } else {
            document.getElementById("spanemail").classList.add( "d-block")
    
        }
    }
    
    if (this.inputPhoneFocus) {
        if (this.phoneValidation() == true) {
            document.getElementById("apanphone").classList.add( "d-none")
            document.getElementById("spanage").classList.add( "d-none")

        } else {
            document.getElementById("apanphone").classList.add( "d-block")
    
        }
    }
    
    if (this.inputAgeFocus) {
        if (this.ageValidation() == true) {
            // document.getElementById("apanage").classList.add( "d-none")
        } else {
            document.getElementById("apanage").classList.add( "d-block")
    
        }
    }
    
    if (this.inputPassFocus) {
        if (this.passwordValidation() == true) {
            document.getElementById("spanpassword").classList.add( "d-none")
        } else {
            document.getElementById("spanpassword").classList.add( "d-block")
    
        }
    }
    if (this.inputRepassFocus) {
        if (this.repasswordValidation() == true) {
            document.getElementById("spanrepassword").classList.add( "d-none")
        } else {
            document.getElementById("spanrepassword").classList.add( "d-block")
    
        }
    }
    
    let val = (this.nameValidation() &&
    this.emailValidation() &&
    this.phoneValidation() &&
    this.ageValidation() && 
    this.passwordValidation() &&
    this.repasswordValidation()    )
    console.log(val)
    if ( val == true) {
            document.getElementById("buttonSubmit").removeAttribute("disabled")
            console.log(`appear`)
    } else {
           document.getElementById("buttonSubmit").setAttribute("disabled", true)
           console.log(`not appear`)
    }
    

}

 

}