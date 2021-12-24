import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import { Box, Text, Button, Divider, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Dashboard() {
  const { user } = useUser();

  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Head>
        <title>Jobs Jet - Dashboard</title>
      </Head>
      <Box w="75%" m="0 auto" mt="75px" minH="70vh">
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Box fontWeight="bold" as="h1" fontSize="3xl" mb="10px">
              Dashboard
            </Box>
            <Box display='flex' alignItems='center'>
                <Text mr='5'>Welcome back, {user?.name}</Text>
                <Button size='sm'><Link href='/account'>Account</Link></Button>
            </Box>
            <Box fontWeight="bold" as="h2" fontSize="3xl" mt="50px" mb="20px">
              Start Matching
            </Box>
            <Text mb='15px'>Test Example card with placeholder data:</Text>
            <Box
              maxW="sm"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image src={property.imageUrl} alt={property.imageAlt} />
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                >
                  {property.title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as="span" color="gray.600" fontSize="sm">
                    / wk
                  </Box>
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box as="span" ml="2" color="gray.600" fontSize="sm">
                    {property.reviewCount} reviews
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" minH="65vh">
            <Divider orientation="vertical" />
            <Box ml="25px" display="flex" flexDir="column">
              <Box fontWeight="bold" as="h2" fontSize="2xl" mb="15px">
                Your Messages:
              </Box>
              <Button size="sm" variant="outline" mb="20px">
                New Message
              </Button>
              <Button size="sm" variant="outline">
                New Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
