import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h28" key={technology.name}>
          {technology.name == "Three JS" ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <img src={technology.icon} alt={technology.name} />
          )}{" "}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
