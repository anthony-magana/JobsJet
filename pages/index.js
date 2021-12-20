import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { Heading, Box, Text, Button, Grid, GridItem } from '@chakra-ui/react'

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
            <Button>Sign Up</Button>
          </div>
          <Image 
            src="/homeimg.png"
            alt="Phone images"
            width={400}
            height={300} 
          />
        </Box>
        <Box style={{marginTop: '100px'}}>
          <Text color='purple.500' fontSize='lg' fontWeight='bold' align='center' style={{marginBottom: '5px'}}>Our Services</Text>
          <Text fontSize='3xl' align='center'>We provide Best Quality Services</Text>
          <Text fontSize='md' align='center' style={{marginTop: '10px', marginBottom: '15px'}}>
            Our commitment to quality ensures that your applications get the best functionality possible. Jobs Jet is more 
            than just a web app, but the entire job hiring experience.
          </Text>
          <Grid
            h='450px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={10}
          >
            <GridItem rowSpan={1} colSpan={1} bg='orange.400'>
              <Text fontSize='lg' align='center'>Jobs Jet Plus</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='teal.400'>
              <Text fontSize='lg' align='center'>Jobs Jet Gold</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='purple.400'>
              <Text fontSize='lg' align='center'>Jobs Jet Platinum</Text>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} bg='red.400'>
              <Text fontSize='lg' align='center'>Jobs Jet</Text>
            </GridItem>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
