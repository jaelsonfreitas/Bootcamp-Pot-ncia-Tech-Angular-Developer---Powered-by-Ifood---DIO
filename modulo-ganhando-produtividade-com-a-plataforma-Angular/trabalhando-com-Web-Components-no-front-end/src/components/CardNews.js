class Cardnews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.style())
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor =  document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newImage = document.createElement("img");

        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        //serve para pendurar o meu card left no pai.
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){}
}
customElements.define("card-news", Cardnews);