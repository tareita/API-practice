const catFact = document.getElementById("catFact");
const facts = [];

function getFact() {
  fetch("https://cat-fact.herokuapp.com/facts/random")
    .then((res) => res.json())
    .then((data) => {
      facts.push(data.text);
      let factsList = "";
      facts.forEach((fact) => {
        factsList += fact + "<br>";
      });
      catFact.innerHTML = factsList;
    })
    .catch((e) => {
      console.log(e);
    });
}
