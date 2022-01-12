import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import Person from "../components/person";

export default function Dashboard({ profiles }) {
  const { user } = useUser();

//   console.log(profiles);
//   console.log(user);

  return (
    <>
      <Head>
        <title>Jobs Jet - Dashboard</title>
      </Head>
      <Box w="75%" m="0 auto" mt="75px" minH="70vh">
        
        <Box display="flex" justifyContent="space-between" flexWrap='wrap'>
          <Box>
            <Box fontWeight="bold" as="h1" fontSize="3xl" mb="10px">
              Dashboard
            </Box>
            <Box display='flex' alignItems='center'>
                <Text mr='5'>Welcome back, {user?.nickname}</Text>
                <Button size='sm'><Link href='/account'>Account</Link></Button>
            </Box>
            <Box fontWeight="bold" as="h2" fontSize="3xl" mt="50px" mb="20px">
              Start Matching
            </Box>
            <Text mb='15px'>Test Example card with placeholder data:</Text>
            {profiles.map((profile) => (
                <Person key={profile._id} profile={profile} />
            ))}
          </Box>
          <Box display="flex" minH="65vh" mt='10'>
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

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        // Getting user data from Auth0, returns an object like this one: {name: 'Bob', email: 'bob@email.com', email_verified: true}
        // const user = getSession(ctx.req).user
        const { req } = ctx;
        const res = await fetch(`http://${req.headers.host}/api/profiles`, {
            headers: { Cookie: ctx.req.headers.cookie },
        });
        const { data } = await res.json();
        console.log('response: ', res);
        return { 
            props: {profiles: data}
        }
    }
});
