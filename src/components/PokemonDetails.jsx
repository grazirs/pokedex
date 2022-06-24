import Modal from "react-modal";
import {
  ButtonCloseDetails,
  DetailsContainer,
  IdContainer,
  ImagesContainer,
  ImgModal,
  ModalContainer,
  TextsContainer,
  BarContainer,
  ImagesTitle,
  ColumnDetail,
  ResponsiveDetail,
} from "./PokemonDetails.styles";
import { Text } from "./Text.styles";
import { MdOutlineClose } from "react-icons/md";
import "./Modal.css";
import { useEffect } from "react";

const PokemonDetails = ({ pokemon, isOpen, closeModal }) => {
  console.log(pokemon)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Selected Option"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={20}
        className="modal"
      >
        <ModalContainer>
          <ButtonCloseDetails onClick={closeModal}>
            <MdOutlineClose color="blue" size="2rem" />
          </ButtonCloseDetails>
          <ImagesTitle>
            <Text variant="subtitle">Standard</Text>
            <Text variant="subtitle">Shiny</Text>
          </ImagesTitle>
          <ImagesContainer>
            <ImgModal src={pokemon.standardSprites[0]} alt={pokemon.name} />
            <ImgModal src={pokemon.standardSprites[1]} alt={pokemon.name} />
            <ImgModal src={pokemon.shinySprites[0]} alt={pokemon.name} />
            <ImgModal src={pokemon.shinySprites[1]} alt={pokemon.name} />
          </ImagesContainer>
          <TextsContainer>
            <IdContainer>
              <Text variant="subtitle">#{pokemon.id}</Text>
            </IdContainer>
            <DetailsContainer>
              <ResponsiveDetail>
                <ColumnDetail>
                  <Text variant="subtitle">Name</Text>
                  <Text variant="text">{pokemon.name}</Text>
                  <Text variant="subtitle">Base Exp</Text>
                  <Text variant="text">{pokemon.baseExp}</Text>
                </ColumnDetail>
                <ColumnDetail>
                  <Text variant="subtitle">Height</Text>
                  <Text variant="textUnit">{pokemon.height} m</Text>
                  <Text variant="subtitle">Weight</Text>
                  <Text variant="textUnit">{pokemon.weight} kg</Text>
                </ColumnDetail>
              </ResponsiveDetail>
              <ResponsiveDetail>
                <ColumnDetail>
                  <Text variant="subtitle">Abilities</Text>
                  {pokemon.abilities.map((ability) => {
                    return (
                      <>
                        <Text variant="text" key={ability}>◦ {ability}</Text>
                      </>
                    );
                  })}
                </ColumnDetail>
                <ColumnDetail>
                  <Text variant="subtitle">Held Items</Text>
                  {pokemon.heldItems.map((item) => {
                    return (
                      <>
                        <Text variant="text" key={item}>◦ {item }</Text>
                      </>
                    );
                  })}
                </ColumnDetail>
              </ResponsiveDetail>
            </DetailsContainer>
          </TextsContainer>
          {pokemon.stats.map((stat) => {
            return (
              <BarContainer>
                <progress value={stat.value} max={100}></progress>
                <Text variant="text" key={stat.name}>{stat.name}</Text>
              </BarContainer>
            );
          })}
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PokemonDetails;
