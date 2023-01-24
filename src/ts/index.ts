import { Advisor } from "./characters/Advisor/Advisor";
import { Fighter } from "./characters/Fighter/Fighter";
import { King } from "./characters/King/King";
import { Squire } from "./characters/Squire/Squire";
import type { CharacterDataStructure } from "./characters/types/types";
import CardComponent from "./ui/CardComponent";

export const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "assets/joffrey.jpg",
};

export const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

export const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

export const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

export const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime: Fighter = new Fighter(jaimeData, "sword", 7);
export const daenerys: Fighter = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion: Advisor = new Advisor(tyrionData, daenerys);
export const bronn: Squire = new Squire(bronnData, 0, jaime);

const prueba = new CardComponent();
