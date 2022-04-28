// Date Range
option = ""
startingDate = document.getElementById('startingDateMenu');
endingDate = document.getElementById('endingDateMenu');
year = new Date().getFullYear();
function setDate() {
    for (var i = 1975; i <= year; i++) {
        option = `<option selected value="${i}">${i}</option>`;
        startingDate.innerHTML += option;
        endingDate.innerHTML += option;
    }
    startingDate.innerHTML += `<option selected value="">select starting Date</option>`;
    endingDate.innerHTML += `<option selected value="">select ending Date</option>`;
}
startingDateYear = "";
endingDateYear = "";
// call setDate on on load
window.onload = setDate();
startingDate.onchange = function (e) {
    startingDateYear = e.target.value;
    console.log(startingDateYear);
    finalizingDate();
}
endingDate.onchange = function (e) {
    endingDateYear = e.target.value;
    console.log(endingDateYear);
    finalizingDate();

}
dateSearch = "";
function finalizingDate() {
    if (startingDateYear != "" && endingDateYear != "") {
        dateSearch = `"${startingDateYear}..${endingDateYear}"`;
        console.log(dateSearch);
    }
}


// searchBar
searchBarSearch = "";
searchBar = document.getElementById('searchBar');
searchBar.onkeyup = function (e) {
    searchBarSearch = e.target.value;
    console.log(searchBarSearch);
    if (e.keyCode == 13) {
        search();
    }
}


// keyword Box
keywordSearch = "";
keywordBox = document.getElementById('keywordBox');
keywordBox.onkeyup = function (e) {
    keywordSearch = e.target.value;
    console.log(keywordSearch);
    keywordSearch = ` "${keywordSearch}" `;
    console.log("->", keywordSearch);
    if (e.keyCode == 13) {
        search();
    }
}

// sun Status
sunStatusSearch = "";
sunStatusTime = "";
sunStatusCity = "";
sunStatus = document.getElementById('sunStatusMenu');
sunStatus.onchange = function (e) {
    sunStatusTime = e.target.value;
    console.log(sunStatusSearch);
    setSun();   
}
sunCityName = document.getElementById('sunCityName');
sunCityName.onkeyup = function (e) {
    sunStatusCity = e.target.value;
    setSun();
    if (e.keyCode == 13) {
        search();
    }
}

function setSun()
{
    sunStatusSearch = `${sunStatusTime}:${sunStatusCity}`;

}

// File type Menu
fileTypeMenu = document.getElementById('fileTypeMenu');
fileSearch = ""
fileTypeMenu.addEventListener('change', function () {

    if (fileTypeMenu.value == 'other') {

        // take input for value
        var fileType = prompt("Enter file type");
        fileSearch = ` filetype:${fileType} `;
        console.log(fileSearch);

    }
    fileSearch += ' filetype:' + fileTypeMenu.value;
    console.log(' fileTypeMenu.value:' + fileTypeMenu.value);
});

// site type Menu
siteTypeMenu = document.getElementById('siteTypeMenu');
siteSearch = "";
siteTypeMenu.addEventListener('change', function () {

    if (siteTypeMenu.value == 'other') {

        // take input for value
        var newSiteType = prompt('Enter new site type:');

        // add to siteTypeMenu
        var newOption = document.createElement('option');
        newOption.value = newSiteType;
        siteTypeMenu.value = newSiteType;

    }
    console.log(' siteTypeMenu.value:' + siteTypeMenu.value);
    siteSearch += ' site:' + siteTypeMenu.value + " ";
});



// Google Search button click
document.getElementById('search').onclick = function () {
    search();
};



// final search
function search() {
    finalSearch = "";
    finalSearch = keywordSearch + " " + fileSearch + " " + siteSearch + " " + searchBarSearch + " " + dateSearch + " " + sunStatusSearch;
    window.open('http://google.com/search?q=' + finalSearch);
    location.reload();
}


