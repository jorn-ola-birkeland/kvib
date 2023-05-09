import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
  Spinner,
  HStack,
} from "@chakra-ui/react";

export type ButtonProps = Omit<
  ChakraButtonProps,
  | "colorScheme"
  | "size"
  | "variant"
  | "leftIcon"
  | "rightIcon"
  | "iconSpacing"
  | "isActive"
  | "loadingText"
  | "spinnerPlacement"
> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
  leftIcon?: string;
  rightIcon?: string;
};

/**
 * Her er en oversikt over utvalget av Knapper i KVIB. Disse er blant annet bygget opp ved bruk av desing tokens fra KVIB, eksempelvis farger og typografi. I dokumentasjonen følger beskrivelse av komponenten og bruksområde, sammen med kodeeksempler.
 *
 * Vi har to sett med farger. Vi har et primærsett (grønn) og et sekundærsett (blått). Vår palett er inspirert av jordtoner. Vi har valgt sekundærsettet som er blått på karttjenester og forvaltningstjenester for å ha kontrast mot kartet.
 *
 * Løsninger som skal se ut som en del av [kartverket.no](http://kartverket.no) skal bruke grønn.
 */
export const Button = forwardRef<ButtonProps, "button">(
  (
    {
      children,
      size = "md",
      variant = "primary",
      colorScheme = "green",
      isDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <ChakraButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        position="relative"
      >
        {isLoading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <HStack spacing={1} visibility={isLoading ? "hidden" : "visible"}>
          {leftIcon && <span className="material-symbols-outlined">{leftIcon}</span>}
          <Center className="text" as="span">
            {children}
          </Center>
          {rightIcon && <span className="material-symbols-outlined">{rightIcon}</span>}
        </HStack>
      </ChakraButton>
    );
  }
);
