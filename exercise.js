"use strict";
let data = [{
        CourseId: "19SUM100",
        Title: "Introduction to HTML/CSS/Git",
        Instructor: "Wyatt",
        Location: "Classroom 7",
        StartDate: "07/08/19",
        Fee: 100.00,
    },
    {
        CourseId: "19SUM200",
        Title: "Introduction to JavaScript",
        Instructor: "Lynn",
        Location: "Classroom 8",
        StartDate: "07/22/19",
        Fee: 350.00,
    },
    {
        CourseId: "19SUM300",
        Title: "Introduction to Node.JS and Express",
        Instructor: "Gross",
        Location: "Classroom 4",
        StartDate: "09/09/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM400",
        Title: "Introduction to SQL and Databases",
        Instructor: "Wyatt",
        Location: "Classroom 6",
        StartDate: "09/16/19",
        Fee: 50.00,
    },
    {
        CourseId: "19SUM500",
        Title: "Introduction to Angular",
        Instructor: "Lynn",
        Location: "Classroom 7",
        StartDate: "09/23/19",
        Fee: 50.00,
    }
];

window.onload = function () {
    loadTitlesDropdown();

}

function loadTitlesDropdown() {
    const courseID = document.getElementById("courseID");

    //adding Select One element e.g <option value="">Select One...</option>
    let selectOneOption = new Option("Select One...")
    selectOneOption.value = "";
    courseID.appendChild(selectOneOption)

    // create an option each tim we go thru the loop
    //<option value = "xxx"> text </option>
    for (let i = 0; i < data.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = data[i].Title;
        theOption.value = data[i].CourseId;
        
        //add that option to the <select> element
        courseID.appendChild(theOption);
    }




}