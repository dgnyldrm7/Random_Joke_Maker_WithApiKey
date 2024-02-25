
const btn = document.querySelector(".btn");
const textArea = document.getElementById("messageText");
const butonText = document.querySelector(".btnText");


const apiKey = "gtxkDzBq7AlfFac8I1egcQ==kcEhfg7bJT3XL49G";

const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";


const option = {
    method: 'GET',
    url: apiURL,
    headers:{
        'X-Api-Key' : apiKey,
    }
};

async function clickFunction(){
    butonText.innerHTML = "...loading...";
    const response =await fetch( apiURL , option  );
    const datas =await response.json();
    const gosterilecek = datas[0].joke;
    textArea.innerText = gosterilecek;
    butonText.innerHTML ="Take a joke";

}

btn.addEventListener("click", clickFunction);

