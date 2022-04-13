// faustos's code 


var searchesDiv = $("#searches");


var searchInput = $("#searchInput");


var searchButton = $("#searchBtn");


// var storedSearches = getStoredSearches();

var omdbResponse 
var streamingResponse 

var requestUrl = "http://www.omdbapi.com/?t=super+bad&apikey=a3c68b61"
fetch(requestUrl)
.then(function (response) {
return response.json();
})
.then(function (data) {
 console.log(data);
 fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=tt0944947&output_language=en', options)
 .then(response => response.json())
 .then(response => console.log(response.streamingInfo)
 console.log(data)
 
 
 )


 .catch(err => console.error(err));

})


var addedMovie = newMovie();

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
		'X-RapidAPI-Key': 'be4375e137msha3ecb5c13006495p1401e8jsn1c464ee45feb'
	}
};

fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=tt0944947&output_language=en', options)
	.then(response => response.json())
	.then(response => console.log(response.streamingInfo))
	.catch(err => console.error(err));

fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=tt8580274&output_language=en', options)
	.then(response => response.json())
	.then(response => console.log(response.streamingInfo))
	.catch(err => console.error(err));
  
  fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=tt8580274&output_language=en', options)
    .then(response => response.json())
    .then(response => console.log(response.streamingInfo))
    .catch(err => console.error(err));


  function searchButtonClicked() {
    let movieVal = document.createElement("div")
    console.log(movieVal)
    console.log(data.results.streamingInfo.netflix.us)
    movieVal.textContent(data.results.streamingInfo.netflix.us)
    
    document.getElementById("movie").append(movieVal)

    // let movie = newMovie(movieVal, null);
    // getMovieData(movie); 
    //This will clear the value once the search is activate
    // searchInput.val("");
    
  }
  
  // searchButtonClicked();

  //   TODO: Build API URL 



  // performAPIGETCall(queryURLTitle, buildURLTitle);
  // performAPIGETCall(queryURLImage, buildImage);


function performAPIGETCall(queryURL, callback) {
  // TODO: perform api call 
  $.ajax({ url: 
    queryURL, 
    method: "GET" }).then(function (response) {
    callback(response);
  });


  // remove below once api in place
  var myResponse = {
    title: "title",
    network: "network",
    image: "https://someimageUrl.com"
  };
  callback(myResponse);
}

function buildURLTitle(data) {

  // do some DOM things
  // add some data to addedMovie, then pass into addNewSearch
  addNewSearch(addedMovie)
}

function buildImage(data) {

   // do some DOM things

}

function addNewSearch(title) {
  // add search to localStorage and our storedSearches collection
  // call our build history method
}

function buildSearchHistory() {
  // add search history items to DOM
}

function newMovie(title, network, image) {
  return { "title": title, "network": network, "image": image };
}

searchInput.on("keyup", function (event) {
  if (event.key === "Enter") {
    searchButtonClicked();
  }
});

// get init function 
// init();



//step 1 store our movie searches 


//step 2 make sure we have an element to house our history <searchdiv>


//step 3 we need to leaverage our stored searches and add elements to our searches div 


//step 4 Style elements from step 3 









// materialize code for search bar
$(document).ready(function() {
    M.updateTextFields();
  });
        
M.AutoInit();