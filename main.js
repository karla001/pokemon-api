
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const jsonData = xhr.responseText;
        const data = JSON.parse(jsonData);
        const pokemon = data.objects[0].pokemon;
        pokemon.forEach( pokefriend => {
            const newDiv = document.createElement("div");
            newDiv.innerText = `${pokefriend.name} is pokemon number ${pokemon.indexOf(pokefriend)} `;
            document.body.appendChild(newDiv);        
        });
    }
}

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();