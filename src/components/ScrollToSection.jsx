

export function ScrollToSection(id){
    const element = document.getElementById(id);
    if(element){
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
    }
}