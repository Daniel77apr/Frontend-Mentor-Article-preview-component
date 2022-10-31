const socialIconsEl = document.getElementById("social-icons-container");
const shareButtonEl = document.getElementById("share-icon-container");
const bodyEl = document.getElementById("body");

let shareWindow = "inactive"

function openShare() {
    if(shareWindow == "inactive") {
        if(window.innerWidth > 750) {
            socialIconsEl.style.translate = "0px 0px";
            socialIconsEl.style.display = "flex";
        } else {
            socialIconsEl.style.display = "flex";
            setTimeout(function () {
                socialIconsEl.style.translate = "0px -100%";
            }, 1); // Delay prevents interruption of translate transition.   
        }
        setTimeout(function () {
            shareWindow = "active"; 
        }, 1); // Delay prevents hide function from being called.
    }
}

function hideShare() {
    if(shareWindow == "active") {
        console.log("hide");
        if(window.innerWidth > 750) {
            socialIconsEl.style.display = "none";
        } else {     
            socialIconsEl.style.translate = "0px 0px";
            setTimeout(function displayNone() {
                socialIconsEl.style.display = "none";
            }, 300);
        }
        shareWindow = "inactive";
    }
}

shareButtonEl.addEventListener("click", openShare);
bodyEl.addEventListener("click", hideShare);