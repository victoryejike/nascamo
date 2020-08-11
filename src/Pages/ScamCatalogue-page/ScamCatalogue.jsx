import React from "react";
//import Header from "../../Components/Header-component/Header";
import CatalogueItem from "../../Components/CatalogueItem-component/CatalogueItem";
//import Subscribe from "../../Components/Subscribe-component/Subscribe";
//import Footer from "../../Components/Footer-component/Footer";
// import Cryptos from "../../assets/cryptos.jpg";
// import TextMesaage from "../../assets/textMessage.jpg";
// import PhoneCall from "../../assets/phoneCall.jpg";
// import Whatsapp from "../../assets/whatsapp.jpg";
// import Email from "../../assets/email.jpg";
import "./ScamCatalogue.css";

class ScamCatalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueItems: [
        {
          image: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="message scam"
              width="100px"
              height="80px"
            />
          ),
          imageText: "vbgjbigabfbi hbaijb Message",
          // articleCount: 12,
        },
        {
          image: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="email scam"
              width="100px"
              height="80px"
            />
          ),
          imageText: "Email",
          //articleCount: 6,
        },
        {
          image: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="whatsapp scam"
              width="100px"
              height="80px"
            />
          ),
          imageText: "Whatsapp",
          //articleCount: 9,
        },
        {
          image: (
            <img
              src="http://mrmrs.github.io/photos/cpu.jpg"
              alt="cryptocurrency scam"
              width="100px"
              height="80px"
            />
          ),
          imageText: "Cryptos",
          //articleCount: 34,
        },
        {
          image: (
            <img
              src="http://mrmrs.github.io/photos/whale.jpg"
              alt="phone Call scam"
              width="100px"
              height="80px"
            />
          ),
          imageText: "$50 in 1 hour",
          //articleCount: 34,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <p className="catalogueName">Verified Scams</p>
        <div className="cataloguePadding">
          <div className="container">
            {this.state.catalogueItems.map((catalogueItem) => (
              <div className="catalogue">
                <CatalogueItem
                  catalogueId={catalogueItem.id}
                  image={catalogueItem.image}
                  category={catalogueItem.imageText}
                  numberOfArticles={catalogueItem.articleCount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ScamCatalogue;
