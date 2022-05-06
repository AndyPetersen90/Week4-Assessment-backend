const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const posterBtn = document.getElementById("add-new-poster")
const posterInput = document.getElementById("new-poster")
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
        .then()
        .catch((err) =>{
            console.log(err)
        })
}

const editPoster = (id, type) => {
    axios.put("http://localhost:4000/api/posters/:id", type)
        .then()
        .catch((err) =>{
            console.log(err)
        })
}