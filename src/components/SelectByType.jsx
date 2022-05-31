import { Option, Select } from "./SelecByType.styles";

const SelectByType = ({ pokemonsTypes, onSelectHandler }) => {
  const onChangeHandler = async (event) => {
    onSelectHandler(event.target.value);
  };

  return (
    <>
      <Select onChange={onChangeHandler} name="pokemons-type" id="type">
        <Option value="">Select a type</Option>
        {pokemonsTypes.map((type) => {
          return (
            <Option key={type} value={type}>{type}</Option>
          )
        })}
      </Select>
    </>
  )
}

export default SelectByType
