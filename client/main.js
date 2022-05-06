const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const posterBtn = document.getElementById("add-new-poster")
const posterInput = document.querySelector('#new-poster')
const imgLocation = document.getElementById("imglocation")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune);

const addPoster = (body) => {

    console.log(body);

    axios.post("http://localhost:4000/api/posters/", body)
        .then((res) => {
            // console.log(res.data);

            let imgElem = document.createElement('img')
            imgElem.textContent = posterInput.value
            imgLocation.appendChild(imgElem);

        })
        .catch((err) =>{
            console.log(err)
        })
};

posterBtn.addEventListener('click', addPoster);

const deletePoster = () => {
    axios.delete("http://localhost:4000/api/posters/:id")
        .then((res) => {
            console.log("Poster Deleted.")
        })
        .catch((err) =>{
            console.log(err)
        })
}

const editPoster = (id, type) => {
    axios.put("http://localhost:4000/api/posters/:id", type)
        .then((res) => {
            console.log("poster updated.")
        })
        .catch((err) =>{
            console.log(err)
        })
}


/* REVIEW WITH ALEC 
Review past labs to build more into this assessment and finish it.
Alecs process is database(controller.js and index.js), then set up your HTML, lastly build the backend.

const newFortuneBtn = document.querySelector('#new-fortune-button')
const newFortuneInput = document.getElementById('new-fortune-input')

const addFortune = () => {
    console.log(newFortuneInput.value) //this is to test that we are getting the value properly.

    //const newFortune = newFortuneInput.value// this can also be used in place of the body from the axios.

    axios.post('//API URL String//', {newFortune: newFortuneInput.value})
        .then(res => {
            alert(res.data)
            newFortuneInput.value = ''
        })


}

newFortuneBtn.addEventListener('click', addFortune)





*/
