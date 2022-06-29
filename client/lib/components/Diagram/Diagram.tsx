import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip
} from "chart.js";
import cx from "classnames";
import { memo, useContext } from "react";
import { Radar } from "react-chartjs-2";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { Shape } from "../Shape";
import styles from "./Diagram.module.css";
import { DiagramType } from "./Diagram.types";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const DiagramComponent = ({
  primary,
  secondary,
  primaryLabel,
  secondaryLabel,
  className,
}: DiagramType) => {
  const { text } = useContext(LanguageContext);
  const findCategoryTitles = () => {
    const categories = Object.values(text.categories);
    return categories.map((category) => category.title);
  };

  const labels = findCategoryTitles();

  const data = {
    labels,
    datasets: [
      {
        label: primaryLabel,
        data: primary,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        borderColor: "rgba(255, 255, 255, 0.25)",
        borderWidth: 2,
      },
    ],
  };
  if (secondary && secondaryLabel) {
    data.datasets.push({
      label: secondaryLabel,
      data: secondary,
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.25)",
      borderWidth: 2,
    });
  }

  const options = {
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
        borderWith: 3,
      },
    },
    scales: {
      r: {
        pointLabels: {
          display: false,
        },
        max: 36,
        min: 0,
        ticks: {
          maxTicksLimit: 1,
          display: false,
        },
        angleLines: {
          color: "rgba(255,255,255,0.25)",
          lineWidth: 2,
        },
        grid: {
          color: "rgba(255,255,255,0.25)",
          lineWidth: 2,
        },
      },
    },
  };

  return (
    <div className={cx(styles.wrapper, className)}>
      {labels.map((label, index) => (
        <div key={index} className={cx(styles["label" + index], styles.label)}>
          {label}
          <Shape category={index} />
        </div>
      ))}
      <Radar data={data} options={options} />
    </div>
  );
};

export const Diagram = memo(DiagramComponent);
