export class Pokemon {
  constructor(
    id,
    name,
    types,
    image,
    url,
    standardSprites, 
    shinySprites,
    weight,
    height,
    baseExp,
    abilities,
    heldItems,
    stats,
  ) {
    this.id = id;
    this.name = name;
    this.types = types;
    this.image = image;
    this.url  = url;
    this.standardSprites = standardSprites;
    this.shinySprites = shinySprites;
    this.weight = weight;
    this.height = height;
    this.baseExp = baseExp;
    this.abilities = abilities;
    this.heldItems = heldItems;
    this.stats = stats;
  }
}

export class PokemonStat {
  constructor(name, value){
    this.name = name;
    this.value = value;
  }
}
