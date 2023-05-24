import { RadioButton as KvibRadio } from "@kvib/react/src/radio/Radio";
import { RadioGroup as KvibRadioGroup } from "@kvib/react/src/radio/RadioGroup";
import { Meta, StoryObj } from "@storybook/react";
import { Stack as KvibStack } from "@kvib/react";

const meta: Meta<typeof KvibRadio> = {
  title: "Komponenter/Skjema/Radio",
  component: KvibRadio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in radio button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    colorScheme: {
      description: "Color of radio button",
      table: {
        type: { summary: "green | blue" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of radio button",
      table: {
        type: { summary: "sm | md | lg" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if radio button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

const radioArgs = { children: "Klikk her", size: "md", colorScheme: "green" };

export const Radio: Story = {
  args: radioArgs,
  render: (args) => <KvibRadio {...args} />,
};

export const RadioGroup: Story = {
  args: radioArgs,
  render: (args) => (
    <KvibRadioGroup>
      <KvibStack direction="row">
        <KvibRadio value="1" {...args} />
        <KvibRadio value="2" {...args} />
        <KvibRadio value="3" {...args} />
      </KvibStack>
    </KvibRadioGroup>
  ),
};
