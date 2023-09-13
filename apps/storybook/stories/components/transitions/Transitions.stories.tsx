import { Meta, StoryObj } from "@storybook/react";
import {
  Fade as KvibFade,
  ScaleFade as KvibScaleFade,
  Slide as KvibSlide,
  SlideFade as KvibSlideFade,
  Collapse as KvibCollapse,
  useDisclosure,
  Box,
  Button,
  FadeProps,
  ScaleFadeProps,
  SlideProps,
  SlideFadeProps,
  CollapseProps,
} from "@kvib/react/src";
import { Stack } from "@kvib/react/src";

const meta: Meta<typeof KvibFade> = {
  title: "Komponenter/Transitions",
  component: KvibFade,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFade>;

export const SlideFadeEx = ({ ...args }: SlideFadeProps) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <Button onClick={onToggle}>Trykk for Slide!</Button>
      <KvibSlideFade in={isOpen} offsetY="20px" {...args}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          Fade
        </Box>
      </KvibSlideFade>
    </div>
  );
};
