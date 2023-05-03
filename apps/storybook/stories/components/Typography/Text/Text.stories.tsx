import { Text as KvibText } from "@kvib/react/src/components/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibText> = {
  title: "Komponenter/Typography/Text",
  component: KvibText,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "Textstyle variant",
      table: {
        type: { summary: "leadParagraph | body | bodySmall | label | description | tag" },
      },
      control: { type: "radio" },
      options: ["leadParagraph", "body", "bodySmall", "label", "description", "tag"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibText>;

export const Text: Story = {
  render: (args) => (
    <KvibText {...args}>
      Lorem ipsum dolor sit amet, invenire indoctum eu vim, ad solum equidem est. Ea antiopam qualisque constituam sed,
      minim congue utroque vis eu. Dolorem incorrupte ad qui, labitur meliore ancillae no vel. Menandri constituto
      disputationi ex sit, nulla dolores deleniti nam eu. Pri putent vocibus ea.
    </KvibText>
  ),
};
