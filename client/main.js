const complimentBtn = document.getElementById("complimentButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)



const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune);



const newFortuneBtn = document.querySelector('#add-new-fortune')
const fortuneInput = document.getElementById('new-fortune')

const addFortune = () => {
    
    console.log(fortuneInput.value);
    
    axios.post("http://localhost:4000/api/fortune", {newFortune: fortuneInput.value})
    .then(res => {
        console.log(res.data);
        alert(res.data)

        
    })
};

newFortuneBtn.addEventListener('click', addFortune);


const deleteFortuneBtn = document.getElementById('delete-fortune-button')
const deleteFortuneInput = document.getElementById('delete-fortune-id')
//I get a confirmation it worked, but it doesnt actually delete any fortunes.//

const deleteFortune = () => {
    console.log(deleteFortuneInput.value);

    axios.delete(`http://localhost:4000/api/fortune/${deleteFortuneInput.value}`)
        .then(res => {
            alert(res.data);
            deleteFortuneInput.value = ''
        })
        .catch((err) =>{
            alert('Does not compute')
        })
};

deleteFortuneBtn.addEventListener('click', deleteFortune);


const editFortuneBtn = document.getElementById('edit-fortune-btn')
const editFortuneInputId = document.querySelector('#edit-fortune-id')
const editFortuneInputText = document.querySelector('#edit-fortune-text')

const editPoster = () => { //I am trying to remember how to distinguesh the information I need to send to the backend to perform the edit.

    axios.put("http://localhost:4000/api/fortune/:id", type)
        .then((res) => {
            console.log("")
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
                
                //Delete Function//
                
                // const deleteBtn = document.getElementById('delete-button')
                // const deleteinput = document.getElementById('delete-input')
                
                // const deleteFortune = () => {
                //     console.log(deleteinput.value) //testing out to make sure its getting this far.
                
                //     axios.delete('//API URL//.${deleteInput.value}')
                //         .then(res => {
                //             alert(res.data)
                //             deleteInput.value = '' //this clears the value from the input box
                //         })
                //         .catch(err => {
                //             alert('Does not compute')
                //         })
                
                // }
                // deleteBtn.addEventListener('click', deleteFortune)


*/
