import { Input as KvibInput } from "@kvib/react/src/input/Input";
import { NumberInput as KvibNumberInput } from "@kvib/react/src/input/Number-Input";
import { NumberInputField as KvibNumberInputField } from "@kvib/react/src/input/Number-Input-Field";
import { NumberInputStepper as KvibNumberInputStepper } from "@kvib/react/src/input/Number-Input-Stepper";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibInput> = {
  title: "Komponenter/Input**",
  component: KvibInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    placeholder: {
      description: "Placeholder for text",
      table: {
        defaultValue: { summary: "Skriv her..." },
      },
      control: "text",
    },
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "select" },
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type InputStory = StoryObj<typeof KvibInput>;
type NumberInputStory = StoryObj<typeof KvibNumberInput>;
type InputDateStory = StoryObj<typeof KvibInput>;

export const Input: InputStory = {
  args: {
    placeholder: "Skriv her...",
    size: "md",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => <KvibInput {...args} />,
};

export const NumberInput: NumberInputStory = {
  args: {
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => (
    <KvibNumberInput {...args}>
      <KvibNumberInputField />
      <KvibNumberInputStepper />
    </KvibNumberInput>
  ),
};

export const InputDate: InputDateStory = {
  args: {
    size: "md",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => <KvibInput {...args} type={"date"} />,
};
