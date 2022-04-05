function fetchPokemon(){
    
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        let pokeImg = data.sprites.other["official-artwork"].front_default;
        let Name = data.name;
        let id = data.id;
        console.log(data);
        change(pokeImg,Name,id);
    })
}


const change = (url,Name,id) =>{
    const pokeImage = document.getElementById("pokeImg");
    pokeImage.src = url;

    const pokeName = document.getElementById("pokeNombre");
    pokeName.textContent = Name;

    const pokeId = document.getElementById("pokeNumero");
    pokeId.textContent = "#" + id;

}
