import { Box, Badge, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Person({ profile }) {
  
  const data = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "person",
    city: "Los Angeles",
    title: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
  };

    return (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="5"
        >
          <Image src={data.imageUrl} alt={data.imageAlt} />
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              <Badge ml='-1' pl='2' pr='2' borderRadius="full" colorScheme="teal">
                {data.city}
              </Badge>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h5"
              lineHeight="tight"
              isTruncated
              fontSize={["xs", "sm"]}
            >
              {profile.name.toUpperCase()}
            </Box>
            <Box color='gray.400'>
              {data.title}
            </Box>

            <Box display="flex" mt="1" alignItems="center" flexWrap='wrap'>
              {data.skills.map((skill, idx) => (
                <Badge key={idx} pl='2' pr='2' borderRadius="full" colorScheme="gray" mt='2' mr='2'>
                  {skill}
                </Badge>
              ))}
            </Box>
          </Box>
        </Box>
    )
}
