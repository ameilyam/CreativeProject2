document.getElementById("searchMealSubmit").addEventListener("click", function(event) {
  console.log("pressed");
  event.preventDefault();
  const value = document.getElementById("searchMealInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
      let results = "";
      for (let i=0; i < json.list.length; i++) {
      	results += "<h2>" + json.list[i] + "</h2>";
      }
      document.getElementById("forecastResults").innerHTML = results;
    });
});