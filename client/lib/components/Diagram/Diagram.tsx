import {
  Chart as ChartJS,
  Filler,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
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
}: DiagramType) => {
  const findCategoryTitles = () => {
    const t = useContext(LanguageContext);
    const categories = Object.values(t.categories);
    return categories.map((category) => category.title);
  };
  const labels = findCategoryTitles();
  const data = {
    labels: labels,
    datasets: [
      {
        label: primaryLabel,
        data: primary,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.8)",
      },
    ],
  };
  if (secondary && secondaryLabel) {
    data.datasets.push({
      label: secondaryLabel,
      data: secondary,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderColor: "rgba(255, 255, 255, 0.2)",
    });
  }

  const options = {
    elements: {
      line: {
        borderWidth: 2,
      },
      point: {
        radius: 0,
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
          color: "rgba(255,255,255,0.15)",
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
  };
  return (
    <div className={styles.wrapper}>
      {labels.map((label, index) => (
        <div key={index} className={cx(styles["label" + index], styles.label)}>
          {label.split(" ").map((word, i) => (
            <div key={i}>{word}</div>
          ))}
          <Shape category={index} />
        </div>
      ))}
      <Radar data={data} options={options} />
    </div>
  );
};

export const Diagram = memo(DiagramComponent);
