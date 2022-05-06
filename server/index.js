const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const { getCompliment, getFortune, addPoster, deletePoster, editPoster/*,addFortune, deleteFortune*/} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/posters/", addPoster);

app.delete("/api/posters/:id", deletePoster);

app.put("/api/posters/:id", editPoster);

/*Alec Review

You can use postman with the local api url to test out your backend. this is for those 
who write their backend first.

app.post("/api/fortune", addFortune);
app.delete("/api/fortune/:id", deleteFortune);




*/


app.listen(4000, () => console.log("Server running on 4000"));
