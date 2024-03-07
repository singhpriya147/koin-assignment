
import Graph from "../components/Graph";
import Divperformance from "../components/Divperformance";
import Divsentiment from "../components/Divsentiment";
import DivAbout from "../components/DivAbout";
import DivTokenomics from "../components/DivTokenomics";
import DivTeam from "../components/DivTeam";
import CoinWrapper from "../components/CoinWrapper";

import "./Home.css";
import DashboardNav from "../components/DashboardNav";

import CoinList from "../components/CoinList";
const Home = () => {
  return (
    <div className='home-page'>
      <section className='frame-parent'>
        <div className='frame-header'>
          <div>Cryptocurrencies</div>
          <img className='icon' alt='' src='/icon.svg' />
          <p>bitcoin</p>
        </div>
        <Graph />

        <DashboardNav />
        <Divperformance />
        <Divsentiment />
        <DivAbout />
        <DivTokenomics />
        <DivTeam />

        <CoinList />

        <CoinList />
      </section>

      <section className='sidebar'>
        <CoinWrapper />
      </section>
    </div>
  );
};

export default Home;
