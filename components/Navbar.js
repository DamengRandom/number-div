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
import Link from "next/link";

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
          <>
            <IconButton
              as="a"
              href="https://github.com/DamengRandom"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://discord.gg/VctrFCXc"
              aria-label="Twitter"
              icon={<FaDiscord fontSize="1.25rem" />}
            />
          </>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}
