import React from "react";
import Navbar from "../Components/Navbar-component/Navbar";
import CatalogueItem from "../Components/CatalogueItem-component/CatalogueItem";
import Cryptos from "../assets/cryptos.jpg";
import TextMesaage from "../assets/textMessage.jpg";
import PhoneCall from "../assets/phoneCall.jpg";
import Whatsapp from "../assets/whatsapp.jpg";
import Email from "../assets/email.jpg";

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
              height="130px"
            />
          ),
          imageText: "Text Message",
          articleCount: 12,
        },
        {
          image: (
            <img src={Email} alt="email scam" width="120px" height="130px" />
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
              height="130px"
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
              height="130px"
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
              height="130px"
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
        <Navbar />
        {this.state.catalogueItems.map((catalogueItem) => (
          <CatalogueItem
            image={catalogueItem.image}
            category={catalogueItem.imageText}
            numberOfArticles={catalogueItem.articleCount}
          />
        ))}
      </div>
    );
  }
}

export default ScamCatalogue;
