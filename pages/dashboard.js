import React, { useState } from 'react'
import { withPageAuthRequired, useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Link from "next/link";
import { Box, Text, Button, Divider } from "@chakra-ui/react";
import Person from "../components/person";
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

export default function Dashboard({ profiles }) {
  const { user } = useUser();

  // console.log(profiles);
//   console.log(user);

  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
  const from = _i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

  function Deck() {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, api] = useSprings(profiles.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
    
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], active, movement: [mx], direction: [xDir], velocity: [vx] }) => {
      const trigger = vx > 0.2 // If you flick hard enough it should trigger the card to fly out
      
      if (!active && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      
      api.start(i => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? xDir * 50 * vx : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = active ? 1.1 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 },
        }
      })
      
      if (!active && gone.size === profiles.length)
        setTimeout(() => {
          gone.clear()
          api.start(i => to(i))
        }, 600)
    })
    // Now we're just mapping the animated values to our view, that's it.
    return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div style={{x, y, display: 'flex', alignItems: 'center', justifyContent: 'center', willChange: 'transform', touchAction: 'none'}} key={i}>
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
              position: 'absolute',
              touchAction: 'none'
            }}
          >
            <Person profile={profiles[i]} img={user?.picture} />
          </animated.div>
        </animated.div>
      ))}
    </>
  )}

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
            <Box mb='750px'>
              <Deck />
            </Box>
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
