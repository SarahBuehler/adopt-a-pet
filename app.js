const express = require("express");
const pets = require("./helper");
const app = express();
const port = 8000;

// index route "/"
app.get("/", (req, res) => {
  res.send(
    "<h1>Adopt a pet</h1><p>Browse through the links below to find your new furry friend:</p><ul><li><a href='/animals/dogs'>Dogs</a></li><li><a href='/animals/cats'>Cats</a></li><li><a href='/animals/rabbits'>Rabbits</a></li></ul>"
  );
});

// animal route
app.get("/animals/", (req, res) => {
  res.send(`<h1>List of pets </h1>`);
});

// specific route
app.get("/animals/:pet_type", (req, res) => {
  const html =
    "<ul>" +
    pets[req.params.pet_type].map((pet) => `<li>${pet.name}</li>`).join("") +
    "</ul>";
  res.send(`<h1>List of ${req.params.pet_type}${html} </h1>`);
});

/* app.get("/animals/:pet_type", (req, res) => {
  res.send(`<h1>List of ${req.params.pet_type} </h1>`);
}); */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
