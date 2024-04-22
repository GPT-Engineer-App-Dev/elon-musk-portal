import { Box, Container, Heading, Text, Button, Link, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container mt={10}>
      <Box textAlign="center">
        <Image borderRadius="full" boxSize="200px" src="https://placehold.co/600x400" alt="Elon Musk" />
        <Heading as="h1" size="2xl" mt={4}>
          Elon Musk
        </Heading>
        <Text fontSize="xl" mt={2}>
          CEO of SpaceX and Tesla
        </Text>
      </Box>

      <Box mt={10}>
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Text fontSize="lg">Elon Musk is a business magnate, industrial designer, and engineer. He is the CEO and CTO of SpaceX, CEO of Neuralink, and CEO of Tesla, Inc.</Text>
      </Box>

      <Box mt={10}>
        <Heading as="h2" size="xl" mb={4}>
          Follow Me
        </Heading>
        <Box display="flex" justifyContent="center">
          <Link mr={4}>
            <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
          </Link>
          <Link mr={4}>
            <Button leftIcon={<FaGithub />}>Github</Button>
          </Link>
          <Link>
            <Button leftIcon={<FaTwitter />}>Twitter</Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
