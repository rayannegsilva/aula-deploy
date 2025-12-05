const URL_POKEMON = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPokemon(nome) {
  if (!nome) return null;

  try {
    const response = await fetch(`${URL_POKEMON}/${nome}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
}
