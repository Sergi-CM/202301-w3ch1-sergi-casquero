import { joffreyData } from "..";
import { Character } from "../characters/Character/Character";

class CardComponent extends Character {
  element: Element;
  parentElement = document.querySelector(".character")!;
  tagName = "div";
  className = "card character__card";
  image: HTMLImageElement;
  title: Element;

  constructor() {
    super(joffreyData);
    this.renderContainer();
    this.renderImage();
    this.renderTexts();
  }

  renderContainer() {
    this.element = document.createElement(this.tagName);
    this.element.className = this.className;
    this.parentElement.appendChild(this.element);
  }

  renderImage() {
    this.image = document.createElement("img");
    this.image.src = this.characterData.imageSource;
    console.log(this.characterData);
    this.image.className = "character__picture card-img-top";
    this.element.appendChild(this.image);
  }

  renderTexts() {
    const cardBody = document.createElement("div");

    this.title = document.createElement("h2");
    this.title.textContent = this.characterData.name;
    this.title.className = "character__name card-title h4";

    cardBody.appendChild(this.title);
    this.element.appendChild(cardBody);
  }
}

export default CardComponent;
