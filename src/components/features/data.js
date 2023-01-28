import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="rgb(25, 191, 80)" size={22} />,
    heading: "Nutrition and diet support",
    text: "Take expert advice and resources on nutrition and diet, including personalized meal plans and recipes.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="rgb(25, 191, 80)" size={22} />,
    heading: "Online consultations",
    text: "Schedule virtual consultations with healthcare professionals to receive personalized advice and treatment plans.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="rgb(25, 191, 80)" size={22} />,
    heading: "Affordable, high-quality medical products",
    text: "NutriSalah will offer a range of safe and effective medical products at lower costs than traditional retail options.",
  },
  {
    id: 4,
    icon: <FaGg color="rgb(25, 191, 80)" size={22} />,
    heading: "Fast and free delivery",
    text: "NutriSalah will offer fast delivery for medical products, with no additional fees for shipping.",
  },
];
