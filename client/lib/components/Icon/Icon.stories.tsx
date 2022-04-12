import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Stack } from "../../layouts/Stack";
import { Icon, iconKeys, iconNames } from "./Icon";
import { IconData } from "./Icon.data";

export default {
  title: "Components/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ padding: "1em", flex: "1 0 150px", background: "#fff" }}>
        <Stack>
          {iconKeys.map((icon: string, index: number) => (
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: "var(--color-dark-blue)",
              }}
              key={index}
            >
              <Icon icon={Number(icon)} infoIcon={true} />
              <span>
                {iconNames[parseInt(icon)]} ({icon})
              </span>
            </div>
          ))}
        </Stack>
      </div>
      <div
        style={{
          background: "var(--color-dark-blue)",
          padding: "1em",
          flex: "1 0 150px",
        }}
      >
        <Stack>
          {iconKeys.map((icon: string, index: number) => (
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: "var(--color-white)",
              }}
              key={index}
            >
              <Icon icon={Number(icon)} />
              <span>{iconNames[parseInt(icon)]}</span>
            </div>
          ))}
        </Stack>
      </div>
      <div style={{ padding: "1em", flex: "1 0 150px", background: "#fff" }}>
        <Stack>
          {iconKeys.map((icon: string, index: number) => (
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: "var(--color-dark-blue)",
              }}
              key={index}
            >
              <Icon icon={Number(icon)} />
              <span>{iconNames[parseInt(icon)]}</span>
            </div>
          ))}
        </Stack>
      </div>
    </div>
  );
};

// story
export const Primary = Template.bind({});
Primary.parameters = {
  viewport: {
    defaultViewport: "Full",
  },
  design: {
    type: "figma",
    url: "",
  },
};
Primary.storyName = "Icon";
Primary.args = { ...IconData };
