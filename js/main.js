let menu_clicked = false
function myFirstFunction(){
    if (menu_clicked == false){
    document.getElementById("elements-menu").style.display = "flex";
    menu_clicked = true
    }
    else if (menu_clicked == true){
        document.getElementById("elements-menu").style.display = "none";
        menu_clicked = false
    }

}