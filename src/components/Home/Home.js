import React from "react";
import "./Home.css";
import logoImage from "../../images/logo1.jpg";
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home-container">
        <FontAwesomeIcon className="home-icon" icon={faHouseUser} color="#518bca" size="10x"/>
      <p>
      &emsp; When it comes to buying and selling real estate in Sacramento,
        California, and the surrounding area, it’s important to have a skilled
        Sacramento County real estate agent by your side to assist you through
        these complex processes.
      </p>
      <p>
      &emsp; Since 2004, Jon Hesse has been helping people in and around the Golden
        State capital with all their real estate needs. Whether you’re looking
        for the perfect home to settle down in with your family, attempting to
        sell the property you’re currently living in or hoping to invest in
        local real estate, he has the necessary resources and experience to help
        you.
      </p>
      <p>
      &emsp; Jon proudly serves Sacramento’s three main counties — El Dorado, Placer
        and Sacramento — as well as other locations outside of the city. He
        knows the ins and outs of the local real estate market, so he can get
        you the best deal to fit your unique needs. Not only that, but he’s
        familiar with all that the Sacramento area has to offer — from
        restaurants to schools to entertainment and everything in between.
      </p>
      <p>
      &emsp; One thing you’ll notice about Jon is that he adheres to the highest
        standards of professionalism and expertise. His expert knowledge coupled
        with his dedication to superior customer service set him apart from the
        competition, making him one of the top real estate agents in Sacramento.
      </p>
      <p>
      &emsp; There’s a lot to love about Sacramento — its four distinct seasons, its
        close proximity to the San Francisco Bay Area and its affordability, to
        name a few. Once you’re ready to purchase investment properties or
        Sacramento homes for sale — or place your residence on the market — you
        can count on Jon to ensure that these processes go smoothly from start
        to finish.
      </p>
      <p>&emsp; Call Jon today to schedule an appointment.</p>

      <img className="home-image" src={logoImage} alt="logo" />
    </div>
  );
};

export default Home;
