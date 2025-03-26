// src/components/PokemonDetails/PokemonDetails.jsx

import { useParams } from 'react-router';

const PokemonDetails = (props) => {
    // Always verify that any props are being passed correctly!
    console.log(props.pokemon[0].weight);

    const { pokemonId } = useParams();
    console.log(pokemonId);

    const singlePokemon = props.pokemon.find((poke) => (
        poke._id === Number(pokemonId)
    ));

    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
                <dt>Weight:</dt>
                <dd>{singlePokemon.weight}</dd>
                <dt>Height:</dt>
                <dd>{singlePokemon.height}</dd>
            </dl>
        </>
    );
};

export default PokemonDetails;
