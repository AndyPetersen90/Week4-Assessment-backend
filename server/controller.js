let posters = [
    {
        id: 0,
        URL: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.teachercreated.com%2F20210910%2Fcovers%2F900sqp%2F7446.png&imgrefurl=https%3A%2F%2Fwww.teachercreated.com%2Fproducts%2Fyou-are-all-kinds-of-amazing-positive-poster-7446&tbnid=tKt8mQ8cukx8YM&vet=12ahUKEwjXy4Cks8v3AhUCIH0KHQA6A1cQ94IIKAt6BQgBEJgD..i&docid=-6urV6FvGSnpuM&w=900&h=900&q=uplifting%20posters&ved=2ahUKEwjXy4Cks8v3AhUCIH0KHQA6A1cQ94IIKAt6BQgBEJgD'

    }
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Don’t worry; prosperity will knock on your door soon.", "Advice, when most needed, is least heeded.", "A good time to finish up old tasks.", "A smooth long journey! Great expectations.", "A pleasant surprise is waiting for you."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomCompliment = fortunes[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    addPoster: (req, res) => {
        const newPoster = req.body
    },

    deletePoster: (req, res) => {
        let existingposter = req.params.id;
        posters.splice(existingposter, 1);
        res.status(200).send(posters);

    },

    editPoster: (req, res) => {
        let id = req.params.id;
        let url = req.body;

        posters[id].URL = url;

    }
}