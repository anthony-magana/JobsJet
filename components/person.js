import { Box, Badge, Image, IconButton } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";

export default function Person({ profile, img }) {
  const data = {
    imageUrl: img,
    imageAlt: "person",
    city: "Los Angeles",
    title: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
  };

    return (
        <Box
          width='sm'
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="5"
          backgroundColor='gray.700'
        >
          <Image src={data.imageUrl} alt={data.imageAlt} width='sm' height='350px' />
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
              {profile?.name.toUpperCase()}
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
          <Box display="flex" mt="1" mr='25%' ml="25%" alignItems="center" justifyContent="center">
              <IconButton size="lg" p='1' m='10' mt='2' aria-label="Swipe left" icon={<CloseIcon w={8} h={8} color='red.500' />} />
              <IconButton size="lg" p='1' m='10' mt='2' aria-label="Swipe right" icon={<CheckIcon w={10} h={10} color='green.500' />} />
          </Box>
        </Box>
    )
}
