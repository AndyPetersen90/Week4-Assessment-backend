const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, addPoster, deletePoster, editPoster} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/posters/", addPoster);

app.delete("/api/posters/:id", deletePoster);

app.put("/api/posters/:id", editPoster);

app.listen(4000, () => console.log("Server running on 4000"));
