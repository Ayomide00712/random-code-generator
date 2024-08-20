$(document).ready(function(){

            
    const btnEL = document.getElementById("btn");
    const jokeEL  = document.getElementById("joke")
    const apikey = "rtTSwRsO2x/j0QZ0FXPllQ==kIW2bq9972PTsLQK";

    const options = {
        mode: 'no-cors',
        method: "GET",
        headers: {
            "X-Api-Key": apikey,
        },

    };

    const apiURL = "https://api.api-ninjas.com/v1/dadjokes";

    async function getjoke(){
    //     const response = await fetch(apiURL, options);
    //     const data = await response.json();

    //    jokeEL.innerText = data[0]

    //    console.log(data)
    
    jokeEL.innerText = "Updating..."
    btnEL.disabled = true;
    btnEL.innerText = "Loading.."

        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/dadjokes',
            headers: { 'X-Api-Key': apikey},
            contentType: 'application/json',
            success: function(result) {
                btnEL.disabled = false;
    btnEL.innerText = "Tell me a joke"
               jokeEL.innerText = result[0].joke;
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });



    }

    btnEL.addEventListener("click", getjoke);
});