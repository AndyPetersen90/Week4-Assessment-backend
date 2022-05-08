
let fortunes = ["Don’t worry; prosperity will knock on your door soon.", "Advice, when most needed, is least heeded.", "A good time to finish up old tasks.", "A smooth long journey! Great expectations.", "A pleasant surprise is waiting for you."];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomCompliment = fortunes[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    addFortune: (req, res) => {
        const {newFortune} = req.body;
        console.log(newFortune)
        fortunes.push(newFortune);

        res.status(200).send('fortune added');
    },

    deleteFortune: (req, res) => {
        let {id} = req.params;
        console.log(id)
        
        if(fortunes[+id]) {
            fortunes.splice(id, 1);

            res.status(200).send('fortune removed');
        } else{
            res.sendStatus(400);
        }

    },

    editFortune: (req, res) => {

        let {id} = req.params;
        let {text} = req.body;

        for (let i = 0; i < fortunes.length; i++){
            if (fortunes[i] === id) {
                fortunes[i] = text
            }else {
                res.sendStatus(400);
            }
        }
    }
}



/* Alec REVIEW

adding to his fortune array

addFortune: (req, res) => {
    const {newFortune} = req.body

    fortunes.push(newFortune);

    res.status(200).send('Fortune added.')

}

deleteFortune(req, res) => {
    const {id} = req.params

   if(fortunes[+id]){
        fortunes.splice(id, 1);

        res.status(200).send('Fortune Removed')
   } else {
       res.sendStatus(400)
   }

}

//put expects and and indication of what is to be updated and what object/string you are updating//
//would need two inputs and a button one to indicate the change, and the other to indicate who//


*/