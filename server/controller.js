
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
    }

}