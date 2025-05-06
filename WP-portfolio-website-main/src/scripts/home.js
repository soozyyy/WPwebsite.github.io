
export function homePage(){

    let home=`

        <div class="vision"> 
            This is the home page. When you click on the home button, it will turn or show to this page
        </div>
    `
    document.querySelector('.js-home').innerHTML=home;
    
    return home;
}
homePage();