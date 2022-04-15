
var searchInput = document.querySelector("#search");
var searchButton = document.querySelector("#search-btn");
var inputList = document.querySelector("#input-list");
var msgError = document.querySelector("#msg");
var recentSearchesSpan = document.querySelector("#recent-searches");
var dataList = JSON.parse(localStorage.getItem("titles")) || []

renderSearchList();

function renderSearchList() {
  for (var i = 0; i < dataList.length; i++) {
    var inputSearch = document.createElement("li");
    inputSearch.textContent = dataList[i];
    inputList.append(inputSearch);

    
  }
}

searchButton.addEventListener("click", function(event) {
  event.preventDefault();

  var search = document.querySelector("#search").value;

  console.log(search);

  dataList.push(search)
  localStorage.setItem("titles", JSON.stringify(dataList));

  renderSearchList();

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


  var apiUrl = "https://www.omdbapi.com/?t=" + userInput + "&apikey=a3c68b61"
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
            var requestUrl = ("https://www.omdbapi.com/?t=" + userInput + "&apikey=d9149ef")
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
                else if (data2.streamingInfo.netflix != true){
                  document.getElementById("streaming").innerHTML = "It's On Disney";
                  console.log("It's On Disney")
                }
                else if (data2.streamingInfo.netflix === true ) {
                  document.getElementById("streaming").innerHTML = "It's On Hulu";
                  console.log("It's On Hulu")
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


