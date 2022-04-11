import {
  Container,
  Button,
  SimpleGrid,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

const LandingPage = ({ profile }) => {
  return (
    <Container isFullWidth>
      <SimpleGrid columns={2} spacing={10}>
        {profile.map((user, i) => {
          return (
            <Box
              key={i}
              maxW="sm"
              borderRadius="lg"
              display="flex"
              flexDirection="column"
              mt="2"
              py="4"
              alignItems="center"
              justifyContent="center"
              boxShadow="dark-lg">
              <Image
                src={user.photo}
                alt="user"
                width={200}
                height="auto"
                borderRadius="full"
                boxSize="150px"
                mb="4"
              />
              <Text fontSize="md" mb="1">
                {user.name}
              </Text>
              <Text fontSize="sm">{user.job}</Text>
              <Text fontSize="sm">{user.greeting}</Text>
            </Box>
          );
        })}
      </SimpleGrid>
      <Link href="/showcase" passHref>
        <Button isFullWidth mt="8" colorScheme="blue" boxShadow="dark-lg">
          Lihat Showcase Saya
        </Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
