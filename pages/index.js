import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from "next/link"
import { Heading, Box, Text, Button, Grid, GridItem } from '@chakra-ui/react'
import { AddIcon, StarIcon, UnlockIcon } from '@chakra-ui/icons'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Jobs Jet - Home</title>
      </Head>
      <div className={styles.container}>
        <Box display='flex' justifyContent='space-between'>
          <div>
            <Heading as='h1' maxW='md' size='xl' style={{marginBottom: '20px'}}>Find the perfect match for you with just a swipe!</Heading>
            <Text style={{marginBottom: '15px'}}>Match employers or talent based on field category, start now.</Text>
            <Button><NextLink href="/api/auth/login">Sign Up</NextLink></Button>
          </div>
          <Image 
            src="/homeimg.png"
            alt="Phone images"
            width={400}
            height={300} 
          />
        </Box>
        <Box style={{marginTop: '100px', marginBottom: '150px'}}>
          <Text color='purple.500' fontSize='lg' fontWeight='bold' align='center' style={{marginBottom: '5px'}}>Our Services</Text>
          <Text fontSize='3xl' align='center'>We provide the Best Quality Services</Text>
          <Text fontSize='md' align='center' maxW='xl' margin='0 auto' style={{marginTop: '10px', marginBottom: '45px'}}>
            Our commitment to quality ensures that our applications and services get the best functionality and user experience possible. Jobs Jet is more 
            than just a web app, but the entire job hiring experience.
          </Text>
          <Grid
            h='350px'
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={6}
          >
            <GridItem rowSpan={1} colSpan={1} bg='orange.400' boxShadow='2xl'>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' margin='90px 0 0 0'>
                <AddIcon fontSize='3xl' color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize='lg' color='white'>Jobs Jet Plus</Text>
                <Text fontSize='md' color='white' textAlign='center' padding='15px 0'>
                  Choosing who to Like can be tough, so we made it easier with Unlimited Likes. Send unlimited Likes to increase your match-making potential.
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='teal.400' boxShadow='2xl'>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' margin='90px 0 0 0'>
                <StarIcon fontSize='3xl' color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize='lg' color='white' align='center'>Jobs Jet Gold</Text>
                <Text fontSize='md' color='white' textAlign='center' padding='15px 5px'>
                Jobs Jet Gold saves time by letting you see who Likes you. Match, pass, and expand photos to view full profiles with a simple tap and get more efficient with your time online.
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='purple.400' boxShadow='2xl'>
              <Box display='flex' flexDir='column' justifyContent='center' alignItems='center' margin='90px 0 0 0'>
                <UnlockIcon fontSize='3xl' color='white' margin='0px 0 25px 0' />
                <Text fontWeight='bold' fontSize='lg' color='white' align='center'>Jobs Jet Platinum</Text>
                <Text fontSize='md' color='white' textAlign='center' padding='15px 5px'>
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
