document.getElementById("searchMealSubmit").addEventListener("click", function(event) {
  console.log("pressed");
  event.preventDefault();
  const value = document.getElementById("searchMealInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "www.themealdb.com/api/json/v1/1/search.php?s=" + value;
  // let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>Recipe for ' + json.strMeal + "</h2>";
      results += '<p>Category: ' + json.strCategory + '</p>';
      results += '<p>Instructions: ' + json.strInstructions + '</p>';
      results += '<img src="' + json.strMealThumb + '"/>';
      results += "<br/>";
      document.getElementById("searchMealResults").innerHTML = results;
    });
});