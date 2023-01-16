const getTheTitles = function(books) {
    /*
    let titleList = [];
    for(book of books){
        titleList.push(book.title);
    }
    */
    const titleList = books.map(book => book.title);
    return titleList;
};

// Do not edit below this line
module.exports = getTheTitles;
