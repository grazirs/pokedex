import Modal from "react-modal";
import {
  ButtonCloseDetails,
  DetailsContainer,
  ColumnDetail,
  IdContainer,
  ImagesContainer,
  ImgModal,
  ModalContainer,
  TextsContainer,
  BarContainer,
  ImagesTitle,
} from "./PokemonDetails.styles";
import { customStyles } from "./PokemonDetails.styles";
import { Text } from "./Text.styles";
import { MdOutlineClose } from "react-icons/md";

const PokemonDetails = ({ pokemon, isOpen, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Selected Option"
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={20}
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
              <ColumnDetail>
                <Text variant="subtitle">Name</Text>
                <Text variant="text">{pokemon.name}</Text>
                <Text variant="subtitle">Base Experience</Text>
                <Text variant="text">{pokemon.base_experience}</Text>
              </ColumnDetail>
              <ColumnDetail>
                <Text variant="subtitle">Height</Text>
                <Text variant="textUnit">{pokemon.height} m</Text>
                <Text variant="subtitle">Weight</Text>
                <Text variant="textUnit">{pokemon.weight} kg</Text>
              </ColumnDetail>
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
