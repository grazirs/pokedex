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
            <ImgModal src={pokemon.sprites.front_default} alt={pokemon.name} />
            <ImgModal src={pokemon.sprites.back_default} alt={pokemon.name} />
            <ImgModal src={pokemon.sprites.front_shiny} alt={pokemon.name} />
            <ImgModal src={pokemon.sprites.back_shiny} alt={pokemon.name} />
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
                  <Text variant="text">{pokemon.base_experience}</Text>
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
                        <Text variant="text">◦ {ability.ability.name}</Text>
                      </>
                    );
                  })}
                </ColumnDetail>
                <ColumnDetail>
                  <Text variant="subtitle">Held Items</Text>
                  {pokemon.held_items.map((item) => {
                    return (
                      <>
                        <Text variant="text">◦ {item.item.name}</Text>
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
                <progress value={stat.base_stat} max={100}></progress>
                <Text variant="text">{stat.stat.name}</Text>
              </BarContainer>
            );
          })}
        </ModalContainer>
      </Modal>
    </>
  );
};

export default PokemonDetails;
