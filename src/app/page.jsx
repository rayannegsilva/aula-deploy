'use client';

import { fetchPokemon } from "../chamadas/api";
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [dado, setDado] = useState(null);
  const [nome, setNome] = useState('');

  function handleSetNome(event) {
    setNome(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const normalized = String(nome || '').trim().toLowerCase();
    const data = await fetchPokemon(normalized);
    setDado(data);
  }


  return (
    <div>
      <h1 className="text-3xl">Página inicial "/"</h1>

      <form onSubmit={onSubmit}>
        <input type="text" value={nome} onChange={handleSetNome} placeholder="Nome do Pokémon" />
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



