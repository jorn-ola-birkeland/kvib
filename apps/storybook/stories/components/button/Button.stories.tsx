import { Button as KvibButton, ButtonGroup as KvibButtonGroup } from "@kvib/react/src/button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/Button",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "primary | secondary | tertiary" },
        defaultValue: { summary: "primary" },
      },
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
    },
    colorScheme: {
      description: "Color of button",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of button",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isLoading: {
      description: "Toggles if button should be loading",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    leftIcon: {
      description: "Icon in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    rightIcon: {
      description: "Icon in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type ButtonStory = StoryObj<typeof KvibButton>;
type ButtonGroupStory = StoryObj<typeof KvibButtonGroup>;

export const Button: ButtonStory = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "primary" },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};

export const ButtonGroup: ButtonGroupStory = {
  render: (args) => (
    <KvibButtonGroup {...args}>
      <KvibButton colorScheme="blue" variant="primary">
        Klikk her
      </KvibButton>
      <KvibButton colorScheme="blue" variant="secondary">
        Klikk her
      </KvibButton>
    </KvibButtonGroup>
  ),
};
