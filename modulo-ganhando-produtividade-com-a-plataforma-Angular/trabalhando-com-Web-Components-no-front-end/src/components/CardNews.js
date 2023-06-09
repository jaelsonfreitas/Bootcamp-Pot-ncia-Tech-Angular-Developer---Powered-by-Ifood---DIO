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
        autor.textContent = " Por: " + (this.getAttribute("autor")|| " Anonymous ");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute("link-url");
        linkTitle.target = "_blank";

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newImage = document.createElement("img");
        newImage.src = this.getAttribute("photo") ;
        newImage.alt = "Darth";


        cardRight.appendChild(newImage);

        componentRoot.appendChild(cardLeft);
        //serve para pendurar o meu card left no pai.
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    style(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            background-color: white;
             width: 99%;
             box-shadow: 6px 0px 5px 10px rgba(28,78,176,0.75);
             -webkit-box-shadow: 6px 0px 5px 10px rgba(28,78,176,0.75);
             -moz-box-shadow: 6px 0px 5px 10px rgba(28,78,176,0.75);
             display: flex;
             flex-direction: row;
             justify-content: space-between;
        
        }


        .card__left{
             display: flex;
             flex-direction: column;
             justify-content: center;
             padding-left: 10px;
        }

        .card__left > span {
            font-weight: 400;
        }
        .card__left > a {
             margin-top: 15px;
             font-size: 25px;
             color: black;
             text-decoration: none;
             font-weight: bold;
        }

        .card__left > p {
            color: rgb(124, 117, 117);
        }
        .card__right img {
             padding-left: 20px;
             margin-left: 20px;
             margin-top: 20px;
             width: 300px;
             height: 169px;
             border-radius: 2px;
        }
        `;

        return style;
    }
}
customElements.define("card-news", Cardnews);