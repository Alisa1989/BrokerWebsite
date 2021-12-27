import React from "react";
import "./Home.css";
import logoImage from "../../images/logo1.jpg";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home-container">
      <FontAwesomeIcon
        className="home-icon"
        icon={faHouseUser}
        color="#518bca"
        size="10x"
      />
      <p>
        &emsp; When it comes to buying and selling real estate in Sacramento,
        California, and the surrounding area, it’s important to have a skilled
        Sacramento County real estate agent by your side to assist you through
        these complex processes.
      </p>
      <p>
        &emsp; Since 2004, Jon Hesse has been helping people in and around the
        Golden State capital with all their real estate needs. Whether you’re
        looking for the perfect home to settle down in with your family,
        attempting to sell the property you’re currently living in or hoping to
        invest in local real estate, he has the necessary resources and
        experience to help you.
      </p>
      <p>
        &emsp; Jon proudly serves Sacramento’s three main counties — El Dorado,
        Placer and Sacramento — as well as other locations outside of the city.
        He knows the ins and outs of the local real estate market, so he can get
        you the best deal to fit your unique needs. Not only that, but he’s
        familiar with all that the Sacramento area has to offer — from
        restaurants to schools to entertainment and everything in between.
      </p>
      <p>
        &emsp; One thing you’ll notice about Jon is that he adheres to the
        highest standards of professionalism and expertise. His expert knowledge
        coupled with his dedication to superior customer service set him apart
        from the competition, making him one of the top real estate agents in
        Sacramento.
      </p>
      <p>
        &emsp; There’s a lot to love about Sacramento — its four distinct
        seasons, its close proximity to the San Francisco Bay Area and its
        affordability, to name a few. Once you’re ready to purchase investment
        properties or Sacramento homes for sale — or place your residence on the
        market — you can count on Jon to ensure that these processes go smoothly
        from start to finish.
      </p>

      <h2>About Jon</h2>
      <p>
      &emsp; Real Estate broker Jon Hesse has completed more than $100 million in
        real estate transactions in Sacramento, El Dorado and Placer Counties,
        making him one of the top agents in the greater Sacramento area. Jon
        draws on his 10 years of experience as a broker as well as his honesty,
        integrity and fairness, always vigorously representing his clients’
        interests to the best of his ability. His energy and adaptability led
        him to embrace social media far before the vast majority of his
        competitors, allowing him to harness the power of sites like Pinterest
        to help sell his clients’ properties.
      </p>
      <p>
      &emsp; Jon started his sales career back in high school selling snowmobiles,
        ATVs, personal watercraft and other recreational vehicles. In 2004, he
        acquired his real estate license and has dedicated the last decade to
        assisting his clients with all of their Real Estate needs, including
        buying and selling new and existing single-family homes. Jon has worked
        with traditional buyers and sellers as well as investors and new home
        builders. In 2009, he spent a year working with top California builder
        Pulte Homes, gaining a comprehensive working knowledge of all facets of
        the housing industry, from contracting to lending. In his current work
        as an independent broker, he leverages all of those experiences to serve
        his clients. The high level of customer service Jon provides speaks for
        itself, as evidenced by his many positive client referrals.
      </p>
      <p>
      &emsp; Jon has spent most of his life in the greater Sacramento area, and he,
        his wife and their young daughter are blessed to call Placer County
        home. Jon believes our area’s many diverse recreational opportunities
        set it apart, and he can’t imagine living anywhere else. From Sonoma
        wine country to Lake Tahoe, from Santa Barbara to San Francisco, there
        is never a shortage of beauty and fun just a short distance away.
      </p>
      <p>
      &emsp; Jon is an avid golfer, frequently practicing his swing at the Winchester
        Country Club in Meadow Vista, CA. He is also a longtime member of a
        local puppy-raising group for Guide Dogs for the Blind, training dogs to
        assist blind people. So far, Jon and his wife have raised four puppies,
        two of which are now actively working with their blind partners.
      </p>
      <p>
      &emsp; If you are interested in buying or selling property in the greater
        Sacramento area, contact Jon today!
      </p>
      <img className="home-image" src={logoImage} alt="logo" />
    </div>
  );
};

export default Home;
