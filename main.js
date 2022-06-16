const catImage = document.getElementById("catImage");

function getCat() {
  fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      catImage.innerHTML = "<div>" + data.text + "</div>";
    })
    .catch((e) => {
      console.log(e);
    });
}
