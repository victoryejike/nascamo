import React from "react";
import Header from "../../Components/Header-component/Header";
import CatalogueItem from "../../Components/CatalogueItem-component/CatalogueItem";
import Subscribe from "../../Components/Subscribe-component/Subscribe";
import Footer from "../../Components/Footer-component/Footer";
import Cryptos from "../../assets/cryptos.jpg";
import TextMesaage from "../../assets/textMessage.jpg";
import PhoneCall from "../../assets/phoneCall.jpg";
import Whatsapp from "../../assets/whatsapp.jpg";
import Email from "../../assets/email.jpg";
import "./ScamCatalogue.css";

class ScamCatalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogueItems: [
        {
          image: (
            <img
              src={TextMesaage}
              alt="message scam"
              width="160px"
              height="160px"
            />
          ),
          imageText: "Text Message",
          articleCount: 12,
        },
        {
          image: (
            <img src={Email} alt="email scam" width="200px" height="160px" />
          ),
          imageText: "Email",
          articleCount: 6,
        },
        {
          image: (
            <img
              src={Whatsapp}
              alt="whatsapp scam"
              width="160px"
              height="160px"
            />
          ),
          imageText: "Whatsapp",
          articleCount: 9,
        },
        {
          image: (
            <img
              src={Cryptos}
              alt="cryptocurrency scam"
              width="160px"
              height="160px"
            />
          ),
          imageText: "Cryptos",
          articleCount: 34,
        },
        {
          image: (
            <img
              src={PhoneCall}
              alt="phone Call scam"
              width="160px"
              height="160px"
            />
          ),
          imageText: "Phone",
          articleCount: 34,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <p className="catalogueName">Our Catalogue</p>
        <div className="container">
          {this.state.catalogueItems.map((catalogueItem) => (
            <div className="catalogue">
              <CatalogueItem
                image={catalogueItem.image}
                category={catalogueItem.imageText}
                numberOfArticles={catalogueItem.articleCount}
              />
            </div>
          ))}
        </div>
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default ScamCatalogue;
