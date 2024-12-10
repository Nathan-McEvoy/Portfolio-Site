const darkOverlay = document.getElementById('popout_dark_bg');
const expandBtnNodeList = document.querySelectorAll(".expand");
const popoutProjectsNodeList = document.querySelectorAll(".popout_wrapper");
const closeBtnNodeList = document.querySelectorAll(".close_popout");

// Iterate over the NodeList of buttons with class .expand
for (let i = 0; i < expandBtnNodeList.length; i++) {
    let activePopout = popoutProjectsNodeList[i];

    // Add event listener to each .expand button to open or close, adding class .active if opening and removing it otherwise
    expandBtnNodeList[i].addEventListener("click", () => {
        if (activePopout.classList.contains("active"))
        {
            popoutProjectsNodeList[i].classList.remove("active");
            activePopout.style.display = "none";
            darkOverlay.style.display = "none";
            expandBtnNodeList[i].focus();
        }
        else
        {
            popoutProjectsNodeList[i].classList.add("active");
            activePopout.style.display = "inline";
            darkOverlay.style.display = "inline";
            closeBtnNodeList[i].focus();
        }
        
    });

    // Using the same for loop index, add event listener to each .close_popout button
    closeBtnNodeList[i].addEventListener("click", () => {
        popoutProjectsNodeList[i].classList.remove("active");
        activePopout.style.display = "none";
        darkOverlay.style.display = "none";
    });
};