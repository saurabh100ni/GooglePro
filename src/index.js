
searchBar = document.getElementById('searchBar');

// keyword Box0
keywordSearch = "";
keywordBox = document.getElementById('keywordBox');
keywordBox.onkeyup = function (e) {
    keywordSearch = e.target.value;
    console.log(keywordSearch);
    keywordSearch = ` "${keywordSearch}" `;
    console.log("->", keywordSearch);
}





// File type Menu
fileTypeMenu = document.getElementById('fileTypeMenu');
fileSearch = ""
fileTypeMenu.addEventListener('change', function () {

    if (fileTypeMenu.value == 'other') {

        // take input for value
        var newFileType = prompt('Enter new file type:');

        // add to fileTypeMenu
        var newOption = document.createElement('option');
        newOption.value = newFileType;
        fileTypeMenu.value = newFileType;

    }
    console.log(' fileTypeMenu.value:' + fileTypeMenu.value);
    fileSearch += ' filetype:' + fileTypeMenu.value;
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



// searchBar 
searchBarSearch = "";
searchBar.onkeyup = function (e) {
    searchBarSearch = e.target.value;
    console.log(searchBarSearch);
    searchBarSearch = ` ${searchBarSearch} `;
    console.log("->", searchBarSearch);
    
}

// Google Search button click
document.getElementById('search').onclick = function () {
    search();
};

// final search
function search() {
    finalSearch = "";
    finalSearch = keywordSearch + " " + fileSearch + " " + siteSearch + " " + searchBarSearch;
    window.open('http://google.com/search?q=' + finalSearch);
    location.reload();
}


