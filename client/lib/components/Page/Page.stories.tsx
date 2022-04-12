import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Stack } from "../../layouts/Stack";
import { GlassPanel } from "../GlassPanel";
import { Text } from "../Text";
import { Title } from "../Title";
import { Page, PageSlot } from "./Page";
import { PageData } from "./Page.data";

export default {
  title: "Components/Page",
  component: Page,
  argTypes: {
    background: {
      control: {
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

// story
export const Primary = Template.bind({});
Primary.parameters = {
  viewport: {
    defaultViewport: "Full",
  },
  layout: "fullscreen",
};
Primary.storyName = "Page";
Primary.args = { ...PageData };

const SlotsTemplate: ComponentStory<typeof Page> = (args) => (
  <Page background={3} valign="center" {...args}>
    <PageSlot location="headerLeft">header left</PageSlot>
    <PageSlot location="headerCenter">header mid</PageSlot>
    <PageSlot location="headerRight">header right</PageSlot>
    <GlassPanel>
      <Stack>
        <Title align="left">Body</Title>

        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et illo
          laudantium voluptatum, iste veritatis quod excepturi sapiente
          molestiae explicabo commodi consequuntur, animi quae porro quibusdam
          provident, illum enim error.
        </Text>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et illo
          laudantium voluptatum, iste veritatis quod excepturi sapiente
          molestiae explicabo commodi consequuntur, animi quae porro quibusdam
          provident, illum enim error.
        </Text>
        <Text size="lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi et illo
          laudantium voluptatum, iste veritatis quod excepturi sapiente
          molestiae explicabo commodi consequuntur, animi quae porro quibusdam
          provident, illum enim error.
        </Text>
      </Stack>
    </GlassPanel>
    <PageSlot location="footer">footer</PageSlot>
  </Page>
);

export const Slots = SlotsTemplate.bind({});
Slots.parameters = {
  viewport: {
    defaultViewport: "Full",
  },
  layout: "fullscreen",
};
Slots.args = {
  valign: "top",
};
