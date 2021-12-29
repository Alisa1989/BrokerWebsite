import React from "react";
import "./Geography.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Geography = () => {
  return (
    <div className="geography-container">
      <h1>Regions of expertise</h1>
      <p>
        &emsp; Jon Hesse, one of Sacramento’s top real estate brokers,
        specializes his services in Sacramento, Placer and El Dorado Counties.
        With over $100 Million in real estate transactions, he’s one of the most
        successful brokers in the area, so you know you’ll be in good hands. If
        you’re thinking of buying or selling a home in the greater Tri-County
        area, Jon is here to help you accomplish your end goal, whether that’s
        purchasing your dream home or selling your house for a great price.
        Here’s a brief overview of the areas Jon specializes in:
      </p>
      <p>
        Sacramento County - Sacramento County is the largest of the eight
        counties in the Greater Sacramento area. It covers nearly 1,000 square
        miles and has a population of about 1.4 million. It extends from the
        Sacramento River to the San Joaquin River and even touches the Sierra
        Nevada Mountains. With direct access to the Bay Area, Sacramento County
        is a viable alternative for commuting to the San Francisco Bay Area,
        which is considerably more expensive and far more congested.
      </p>
      <p>
        Placer County - Situated right in the middle of Gold Country, Placer
        County is located in both the Sacramento Valley and Sierra Nevada
        regions of California. It was established as a county in April 1851 and
        has a population of approximately 350,000. This county contains multiple
        towns and cities, but more local to the area would be the towns of
        Auburn, Colfax, Lincoln, Rocklin, Roseville and Loomis. Placer County
        spans from Lake Tahoe to the suburbs of Sacramento.
      </p>
      <p>
        El Dorado County - The least populated of the three counties, El Dorado
        County has about 180,000 people. It’s approximately 1,805 square miles,
        many of which are covered with gorgeous rolling hills and mountains. El
        Dorado County includes the cities and communities of South Lake Tahoe,
        Placerville, El Dorado Hills, Cameron Park and Diamond Springs. Its
        beautiful landscape, which includes access to bodies of water such as
        Folsom Lake, draws tourists as well as full-time inhabitants.
      </p>
      <p>
        &emsp; Of course, the cities within these counties each have their own
        unique attractions and vibes, so if you’re interested in viewing
        Sacramento homes for sale, Jon can help you figure out which one is
        right for you. On the other hand, if you’re planning to put your
        Sacramento area property on the market, Jon can ensure that you price
        your home correctly and reach the right audience with his local
        knowledge and expertise.
      </p>
      <p>
        &emsp; Make the wise choice and call Jon today to see how he can assist
        you with your real estate needs.
      </p>
      <p>&emsp; Explore these counties in more detail:</p>
      <Link to="/Regions/El-Dorado-County">El Dorado County</Link>
      <Link to="/Regions/Sacramento-County">Sacramento County</Link>
      <Link to="/Regions/Placer-County">Placer County</Link>
      <Outlet />
    </div>
  );
};

export default Geography;
