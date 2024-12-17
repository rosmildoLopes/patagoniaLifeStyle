import HeroNosotros from "../components/HeroNosotros";
import Team from "../components/Team";
import Carousel from "../components/Carrousel";
import { nosotros } from "../constants/slideNosotros";

const Nosotros = () => {
  return (
    <div>
      <HeroNosotros />
      <Team />
      <Carousel images={nosotros} />
    </div>
  );
};

export default Nosotros;
