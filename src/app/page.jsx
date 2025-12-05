'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const URL_POKEMON = process.env.API_URL;

  const [dado, setDado] = useState(null);
  const [nome, setNome] = useState();

  async function fetchPokemon(nome) {
    if (!nome) return;

    try {
      const response = await fetch(`${URL_POKEMON}/${nome}`)
      const data = await response.json();
      setDado(data);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error)
    }
  }

  function handleSetNome(event) {
    setNome(event.target.value)
  }

  function onSubmit(event) {
    event.preventDefault()
    fetchPokemon(nome)
  }


  return (
    <div>
      <h1 className="text-3xl">Página inicial "/"</h1>

      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleSetNome} />
        <button type="submit">Pesquisar pokemon</button>
      </form>
      {dado && (
        <div>
          <p>{dado.name}</p>
          <Image src={dado.sprites.front_default} height={200} width={200}
          alt={"carrega"}
          />
        </div>

      )}
    </div>
  );
}



