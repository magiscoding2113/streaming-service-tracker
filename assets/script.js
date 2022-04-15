var searchInput = document.querySelector("#search");
var searchButton = document.querySelector("#search-btn");
var inputList = document.querySelector("#input-list");
var msgError = document.querySelector("#msg");
var recentSearchesSpan = document.querySelector("#recent-searches");
var data = ["Eurovision, Encanto, Turning Red"];


function displayMessage(type, message) {
  msgError.textContent = message;
  msgError.setAttribute("class", type);
}

function renderRecentSearched(data) {
  inputList.innerHTML = "";
  inputList.textContent = data.length;
  
  for (var i = 0; i < data.length; i++) {
    var inputs = data[i];

    var li = document.createElement("li");
    li.textContent = inputs;
    li.setAttribute("input-list", i);

    todoList.appendChild(li);
}
recentSearchesSpan.textContent = search;
}




searchButton.addEventListener("click", function(event) {
  event.preventDefault();

  var search = document.querySelector("#search").value;

  if (search === "") {
    displayMessage("error", "No Results Found");

  localStorage.setItem("search", search);
  
  renderRecentSearched();

  }
});
      
  





const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
    'X-RapidAPI-Key': 'be4375e137msha3ecb5c13006495p1401e8jsn1c464ee45feb'
  }
};

document.getElementById("search-btn").addEventListener("click", event => {
  event.preventDefault()
  var userInput = document.getElementById("search").value
  
  
  var apiUrl = "http://www.omdbapi.com/?t=" + userInput + "&apikey=a3c68b61"
  fetch(apiUrl)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    var streamingUrl = 'https://streaming-availability.p.rapidapi.com/get/basic?country=us&imdb_id=' + data.imdbID + '&output_language=en'
    
    
    console.log(data)
    fetch(streamingUrl, options)
    .then(function (res2) {
      return res2.json();
    })
    .then(function (data2) {
      console.log(data) // omdb response
      console.log(data2) // rapidAPi response
      // append title and images!!!!
      
      function getApi() {
          var requestUrl = ("http://www.omdbapi.com/?t=" + userInput + "&apikey=a3c68b61")
          fetch(requestUrl)
          .then(function (response) {
          return response.json();
          })
          .then(function (data) {
           console.log(data);
           console.log(data.Poster)
           let imgElem = document.createElement('img')
           console.log(imgElem)
           imgElem.setAttribute('src', data.Poster)
           document.getElementById('movie-poster').append(imgElem)

          //  let textElement = document.textContent("movie-title")
          console.log(data2.title)
          console.log(data2.streamingInfo)
          
          var movieTitle = data2.title
          document.getElementById("movie-title").innerHTML = movieTitle;
          
          
          
          if (data2.streamingInfo.netflix) {
            document.getElementById("streaming").innerHTML = "It's On Netflix";
            console.log("It's On Netflix")
          }
          



          })
          }
          getApi();
         
      
          



    })
    .catch(function (err) {
      console.error(err);
    });
  })
  .catch(function (err) {
    console.error(err);
  });
})

//library of congress project solution
//bear image code from Mariana 
//
