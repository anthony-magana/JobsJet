import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head'
import { Box, Text, Button } from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0';

export default function Dashboard() {
    const { user } = useUser();
    return (
        <>
            <Head>
                <title>Jobs Jet - Dashboard</title>
            </Head>
            <Box w='75%' m='0 auto' mt='75px'>
                <Box>
                    <Box fontWeight='bold' as='h1' fontSize='2xl'>Dashboard</Box>
                    <Text>Welcome back, {user?.name}</Text>
                </Box>
            </Box>
        </>
    )
}

export const getServerSideProps = withPageAuthRequired();
