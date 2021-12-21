import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from "next/link"
import { Box, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import { AddIcon, StarIcon, UnlockIcon } from '@chakra-ui/icons'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Jobs Jet - Home</title>
      </Head>
      <div className={styles.container}>
        <Box display='flex' justifyContent='space-between'>
          <Box mr='10px'>
            <Box fontWeight='bold' as='h1' maxW='md' fontSize={['lg', '2xl', '3xl']} style={{marginBottom: '20px'}}>Find the perfect match for you with just a swipe</Box>
            <Text fontSize={['sm', 'md']} style={{marginBottom: '15px'}}>Match employers or talent based on field category, start now.</Text>
            <Button><NextLink href="/api/auth/login">Sign Up</NextLink></Button>
          </Box>
          <Image 
            src="/homeimg.png"
            alt="Phone images"
            width={400}
            height={300} 
          />
        </Box>
        <Box style={{marginTop: '100px'}} mb={{base:'350px', sm: '325px', md: '100px', lg: '100px'}}>
          <Text color='purple.500' fontSize={['md','lg']} fontWeight='bold' align='center' style={{marginBottom: '5px'}}>Our Services</Text>
          <Text fontSize={['2xl', '3xl']} align='center'>We provide the Best Quality Services</Text>
          <Text fontSize={['sm', 'md']} align='center' maxW='xl' margin='0 auto' style={{marginTop: '10px', marginBottom: '45px'}}>
            Our commitment to quality ensures that our applications and services get the best functionality and user experience possible. Jobs Jet is more 
            than just a web app, but the entire job hiring experience.
          </Text>
          <Grid
            h={['300px','350px']}
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={6}
            display={{ md: 'flex' }}
            mb={{base: '300px', sm: '150px', md: '100px' }}
          >
            <GridItem rowSpan={1} colSpan={1} bg='orange.400' boxShadow='2xl' mb={{ base: '20px', sm: '20px', md: '0px', lg: '0px'}}>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' pt={{base: '25px', sm: '25px', md: '64px', lg: '80px'}}>
                <AddIcon fontSize={['2xl','3xl']} color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize={['sm','md','lg']} color='white' align='center'>Jobs Jet Plus</Text>
                <Text fontSize={['xs','sm','md']} color='white' textAlign='center' padding='15px 5px'>
                  Choosing who to Like can be tough, so we made it easier with Unlimited Likes. Send unlimited Likes to increase your match-making potential.
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='teal.400' boxShadow='2xl' mb={{base: '20px', sm: '20px', md: '0px', lg: '0px'}}>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' pt={{base: '25px', lg: '80px', md: '64px', sm: '25px'}}>
                <StarIcon fontSize={['2xl','3xl']} color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize={['sm','md','lg']} color='white' align='center'>Jobs Jet Gold</Text>
                <Text fontSize={['xs','sm','md']} color='white' textAlign='center' padding='15px 5px'>
                Jobs Jet Gold saves time by letting you see who Likes you. Match, pass, and expand photos to view full profiles with a simple tap and get more efficient with your time online.
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='purple.400' boxShadow='2xl' mb={{base: '20px', sm: '20px', md: '0px', lg: '0px'}}>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' pt={{base: '25px', lg: '80px', md: '64px', sm: '25px'}}>
                <UnlockIcon fontSize={['2xl','3xl']} color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize={['sm','md','lg']} color='white' align='center'>Jobs Jet Platinum</Text>
                <Text fontSize={['xs','sm','md']} color='white' textAlign='center' padding='15px 5px'>
                  Enjoy all of Jobs Jet&apos;s premium features while getting maximum visibility on the app. Jobs Jet Platinum is the ultimate job-finding service.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
