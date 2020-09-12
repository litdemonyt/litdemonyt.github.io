const scrollCustom = elementId => {
    console.log("scroll function called")
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        behavior: 'smooth'
    });
}