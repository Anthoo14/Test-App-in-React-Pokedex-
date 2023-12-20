import react, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "react-bootstrap/ListGroup";
import { getPokemons } from "../controller/getPokemon";
import { Pokemon } from "../models/pokemon.m";
import Figure from "react-bootstrap/Figure";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const List = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const ObtenerTodos = async () => {
      const allPokemons = await getPokemons();
      setPokemons(allPokemons);
    };
    ObtenerTodos();
  });

  const filtarPokemon= pokemons?.slice(0,151).filter((pokemon)=>{
    return pokemon.name.toLowerCase().match(query.toLowerCase());
  })

  return (
    <>
      <h1 className="text-center mb-5">Pokedex 1° Generación</h1>
      <header>< input  className="mb-5 form-control w-50 mx-auto" type="text" value={query} placeholder="Buscar Pokemon" onChange={(event)=>setQuery(event.target.value.trim())} />
     
      </header>



      <div className="content-wrapper">
        <div className="content mx-5" >
          <div className="row gap-3">
            {filtarPokemon?.slice(0,151).map((pokemon) => (
              <Card className="mx-auto" style={{ width: "18rem" }}>
                <Card.Header>
                  <b>Type: </b>
                  {pokemon.type}
                </Card.Header>
                <Card.Img
                  width="80"
                  height="100"
                  variant="top"
                  src={pokemon.imggif}
                  className="d-block mx-auto w-50"
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {pokemon.id} - {pokemon.name}
                  </Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                        />
                        <b> HP: </b>{pokemon.hp}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/2746/2746930.png"
                        />
                      <b> Attack: </b> {pokemon.attack}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/786/786447.png"
                        />
                      <b> Defense:</b> {pokemon.defense}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/3113/3113054.png"
                        />
                      <b> E.Ataque:</b> {pokemon.sp_atk}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/3113/3113049.png"
                        />
                      <b> E.Defense:</b> {pokemon.sp_def}
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Figure.Image
                          width={16}
                          height={16}
                          src="https://cdn-icons-png.flaticon.com/128/1483/1483660.png"
                        />
                      <b> Speed:</b> {pokemon.speed}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
