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
