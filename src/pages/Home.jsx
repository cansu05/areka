import ClimateBridge from "../components/home/ClimateBridge";
import ClimateImpact from "../components/home/ClimateImpact";
import ForEveryone from "../components/home/ForEveryone";
import Hero from "../components/home/Hero";
import SmartScalableTechnology from "../components/home/SmartScalableTechnology";

const HomePage = () => {
  return (
    <section>
      <Hero />
      <ClimateImpact />
      <ClimateBridge />
      <ForEveryone />
      <SmartScalableTechnology />
    </section>
  );
};
export default HomePage;
