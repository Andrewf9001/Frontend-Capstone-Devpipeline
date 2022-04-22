import BoxShadow from "../widgets/boxShadow/BoxShadow";
import PhotoTransformer from "../widgets/PhotoTransformer";
import RockPaperScissors from "../widgets/RockPaperScissors";
import BleachImageGallery from "../widgets/BleachImageGallery";
import SwapiSearch from "../widgets/swapi/SwapiSearch";

const widgetComponents = [
  {
    id: 1,
    title: "Box Shadow Generator",
    description: "A tool to generate a box shadow easily and dynamically",
    Comp: BoxShadow,
  },
  {
    id: 2,
    title: "Photo Transformer",
    description:
      "A tool that lets you use a slider to change an image from color to greyscale",
    Comp: PhotoTransformer,
  },
  {
    id: 3,
    title: "Rock Paper Scissors",
    description: "Play a game of Rock, Paper, Scissors against the computer!",
    Comp: RockPaperScissors,
  },
  {
    id: 4,
    title: "Bleach Anime Images",
    description: "Click through different art of the manga/anime Bleach",
    Comp: BleachImageGallery,
  },
  {
    id: 5,
    title: "Swapi Search Engine",
    description: "Query the Star Wars Api (SW Api) database",
    Comp: SwapiSearch,
  },
];

export default widgetComponents;
