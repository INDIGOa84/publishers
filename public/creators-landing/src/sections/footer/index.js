import React from "react";
import { Box, Text, Image, ResponsiveContext } from "grommet";
import { FooterLegal } from "../../components";
import BuiltWithBat from "../../components/img/built-with-bat.svg";
import locale from "../../locale/en";

const FooterComponent = props => (
  <Box
    justify="between"
    direction={props.direction}
    align="center"
    pad={{ vertical: "medium", horizontal: "large" }}
    background="#F3F3FD"
    wrap
  >
    <Box direction="row" gap="small" pad={props.padded}>
      <FooterLegal label={locale.footer.one} href={locale.footer.oneHref} />
      <Text color="grey" size="small">
        |
      </Text>
      <FooterLegal label={locale.footer.two} href={locale.footer.twoHref} />
      <Text color="grey" size="small">
        |
      </Text>
      <FooterLegal label={locale.footer.three} href={locale.footer.threeHref} />
    </Box>
    <Box
      as="a"
      direction="row"
      href={locale.footer.fourHref}
      aria-label={locale.nav.batPillAlt}
      pad={props.padded}
    >
      <Image src={BuiltWithBat} />
    </Box>
  </Box>
);

export const Footer = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => {
        if (size === "small") {
          return <FooterComponent direction="column" padded="8px" />;
        } else {
          return <FooterComponent direction="row" />;
        }
      }}
    </ResponsiveContext.Consumer>
  );
};