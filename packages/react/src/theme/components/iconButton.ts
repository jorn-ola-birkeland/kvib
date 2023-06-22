import { colors, radii } from "../tokens";
// import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  bg: "red",
  border: "2px dashed", // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: "semibold", // change the font weight
});

const solid = defineStyle({
  bg: colors.green[500],
  alignItems: "center",
  padding: "12px",
  border: "2px dashed",
  borderRadius: 0,
  fontWeight: "semibold",
});

export const IconButtonTheme = defineStyleConfig({
  variants: { outline, solid },
});

// const helpers = createMultiStyleConfigHelpers(["button", "icon"]);
// export const IconButtonTheme = helpers.defineMultiStyleConfig({
//   baseStyle: {
//     button: {
//       gap: "4px",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: radii.lg,
//       _disabled: {
//         opacity: 1,
//         color: colors.gray[100],
//         cursor: "not-allowed",
//       },
//     },
//     icon: {
//       width: "18px",
//       height: "18px",
//       _disabled: {
//         opacity: 1,
//         color: colors.gray[100],
//         cursor: "not-allowed",
//       },
//     },
//   },
//   sizes: {
//     sm: {
//       button: {
//         padding: "8px",
//         minWidth: "40px",
//         minHeight: "40px",
//       },
//     },
//     md: {
//       button: {
//         padding: "12px",
//         minWidth: "48px",
//         minHeight: "48px",
//       },
//     },
//     lg: {
//       button: {
//         padding: "14px",
//         minWidth: "52px",
//         minHeight: "52px",
//       },
//     },
//   },
//   variants: {
//     ordinary: ({ colorScheme }) => ({
//       button: {
//         bg: `${colorScheme}.500`,
//         _hover: {
//           bg: `${colorScheme}.400`,
//         },
//         _active: {
//           bg: `${colorScheme}.600`,
//         },
//       },
//       icon: {
//         color: colors.white,
//       },
//     }),
//
//     outlined: ({ colorScheme }) => ({
//       button: {
//         bg: colors.white,
//         // TODO: sett inn borderShadow
//       },
//       icon: {
//         color: `${colorScheme}.500`,
//       },
//     }),
//   },
//
//   defaultProps: {
//     size: "md",
//     colorScheme: "green",
//     variant: "ordinary",
//   },
// });
