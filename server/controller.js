
let fortunes = ['Don’t worry; prosperity will knock on your door soon.', 'Advice, when most needed, is least heeded.', 'A good time to finish up old tasks.', 'A smooth long journey! Great expectations.', 'A pleasant surprise is waiting for you.'];
//I realized that I was adding objects to the above array, and then I was trying to add and delete fortunes from 
// the mixed array. So I have set up a different array for tha added fortunes.

let customFortunes = []

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
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        // console.log(req.body.newFortune)
        const newFortuneText = req.body.newFortune;

        customFortunes.push(newFortuneText);
        console.log(customFortunes);

        res.status(200).send(`${newFortuneText} added`);
    },

    deleteFortune: (req, res) => {
        let {id} = req.params;
        
        if(customFortunes[id]) {
            customFortunes.splice(id, 1);
            console.log(customFortunes);
            res.status(200).send('Fortune removed');

        } else{
            res.sendStatus(400);
        }

    },

    editFortune: (req, res) => {
        console.log(req.params)
        console.log(req.body);

        let {id} = req.params;
        let {text} = req.body;
        console.log(id)
        console.log(text)

        for (let i = 0; i < customFortunes.length; i++){
            if (customFortunes[i].id === id) {
                customFortunes[id].newFortune += text

                console.log(customFortunes);
            }else {
                res.sendStatus(400);
            }
            return customFortunes
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