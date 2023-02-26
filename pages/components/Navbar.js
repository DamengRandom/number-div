import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaDiscord } from "react-icons/fa";

export default function Navbar() {
  return (
    <Flex px={8} py={4}>
      <Box>
        <Heading as="h3" size="lg">
          周易数字卦
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <ButtonGroup variant="ghost">
          <a
            href="https://github.com/DamengRandom"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
          </a>
          <a
            href="https://discord.gg/VctrFCXc"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaDiscord fontSize="1.25rem" />}
            />
          </a>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}
