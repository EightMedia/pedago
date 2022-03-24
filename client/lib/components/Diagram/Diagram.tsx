import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { memo, useContext } from "react";
import { Radar } from "react-chartjs-2";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { DiagramType } from "./Diagram.types";
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const findCategoryTitles = () => {
  const t = useContext(LanguageContext);
  const categories = Object.values(t.categories);
  return categories.map((category) => category.title);
};

const DiagramComponent = ({
  primary,
  secondary,
  primaryLabel,
  secondaryLabel,
}: DiagramType) => {
  const labels = findCategoryTitles();
  const data = {
    labels: labels,
    datasets: [
      {
        label: primaryLabel,
        data: primary,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
      {
        label: secondaryLabel,
        data: secondary,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        max: 36,
        min: 0,
        ticks: {
          maxTicksLimit: 1,
          display: false,
        },
        angleLines: {
          lineWidth: 2,
          color: "rgba(255,255,255,0.15)",
        },
        grid: {
          lineWidth: 2,
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
  };
  return <Radar data={data} options={options} />;
};

export const Diagram = memo(DiagramComponent);
