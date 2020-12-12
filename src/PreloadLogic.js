const PreloadLogic = ()=>{
    //DOM Elements
    const preloadHeading = document.querySelector('.preload-heading');
    const preloadParagraph = document.querySelector('.preload-paragraph');

    window.addEventListener("load", function(){
        preloadHeading.style.cssText = "animation: heading-appearance 2s ease;";
        preloadParagraph.style.cssText = "animation: paragraph-appearance 2s ease;";
    });
}

export default PreloadLogic;

