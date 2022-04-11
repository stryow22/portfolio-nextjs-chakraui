import { Text, Image, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

const ShowCase = ({ showcase, profile }) => {
  return (
    <>
      <Flex flexDirection="column">
        {showcase.map((galery, index) => {
          return (
            <Flex
              key={index}
              justifyContent="space-between"
              direction={index % 2 === 0 ? "row-reverse" : "row"}>
              <Flex
                flexDirection="column"
                justifyContent="center"
                w="50%"
                pl="12"
                pr="12">
                <Text fontSize="3xl" fontWeight="600">
                  {galery.title}
                </Text>
                <Text>{galery.description}</Text>
              </Flex>
              <Image
                src={galery.photo}
                alt="showcase"
                width="50%"
                height="auto"
              />
            </Flex>
          );
        })}
      </Flex>
      <Flex justifyContent="center">
        <Link href="/" passHref>
          <Button colorScheme="blue" width="30%" mt="6" mb="6">
            Kembali ke halaman utama
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default ShowCase;
