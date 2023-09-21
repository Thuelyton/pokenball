import styles from '../../src/styles/Home.module.css'

import Image from 'next/image'
import Card from '../../src/components/Card';
 
export async function getStaticProps() { // Corrigido de getSaticProps para getStaticProps
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}?limit=${maxPokemons}`) // Corrigido limit=${maxPokemons} para ?limit=${maxPokemons}
  const data = await res.json()

  // Adicionar o índice aos pokémons
  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
      <h1 className={styles.title}>Poke <span>next</span></h1>
      <Image 
      src="/images/pokeball.png" 
      width="50" 
      height="50" 
      alt='Pokenext'
       />
    </div>
      
      <div className={styles.pokemon_container} >
        
      
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
          </div>
      
    </>
  )
}
