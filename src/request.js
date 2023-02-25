export default async function Request(){
    var pickPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    var convertPokemon = await pickPokemon.json();

    var picture = convertPokemon.sprites.back_default;
    console.log((picture));
    console.log(typeof(picture))

    return (picture);

};