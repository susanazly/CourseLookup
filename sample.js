
window.onload = function () {
    loadHikesDropdown();
    const showDetailsBtn = document.getElementById("showDetailsBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;
}
function loadHikesDropdown() {
    const hikesDropdown = document.getElementById("hikesDropdown");
    // create <option value="">Select One...</option> as first option
    //let selectOneOption = new Option("Select One...", "");
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select one...";
    selectOneOption.value = "";
    hikesDropdown.appendChild(selectOneOption);
    for (let i = 0; i < hikes.length; i++) {
        // create an option each time we go thru the loop
        // <option value="xxx">text</option>
        let theOption = document.createElement("option");
        theOption.textContent = hikes[i].name;
        theOption.value = hikes[i].id;
        // add that option to the <select> element
        hikesDropdown.appendChild(theOption);
    }
}
function showDetailsBtnClicked() {

  //erase previous trail info
    const descriptionPara = document.getElementById("descriptionPara");
    descriptionPara.innerHTML = "";
    
    const lengthPara = document.getElementById("lengthPara");
    lengthPara.innerHTML = "";

    // get the hike selected from the dropdown list
    const hikesDropdown = document.getElementById("hikesDropdown");
    let selectedHikeId = hikesDropdown.value;

    // testing to see if the user has selected "Select one..."
    if (selectedHikeId == "") {
        alert("Please select a hike first");
        return;
    }
  

    // go find that hike in the array of hiking data
    let matchingHike = hikes.find(arrayElement => arrayElement.id == selectedHikeId);

    // display the specific matching hiking data below the button in the details area 
    
    descriptionPara.innerHTML = matchingHike.description;

    lengthPara.innerHTML = "Length: " + matchingHike.length;
}
