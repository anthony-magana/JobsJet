import { useColorMode, IconButton, Box, Heading, Link } from '@chakra-ui/react'
import NextLink from "next/link"
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

function navbar() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Box w='100%' display='flex' justifyContent='space-between' style={{padding: '10px 0 10px 0', width: '75%', margin: '0 auto'}}>
                <Heading as='h1' size='xl'>Jobs Jet</Heading>
                <div>
                    <IconButton onClick={toggleColorMode} variant="outline" aria-label='toggle color mode' icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} style={{marginRight: '15px'}} />
                    <NextLink href='/' passHref>
                        <Link style={{paddingRight: '15px'}}>Home</Link>
                    </NextLink>
                    <NextLink href='/about' passHref>
                        <Link style={{paddingRight: '15px'}}>About</Link>
                    </NextLink>
                    <NextLink href='/contact' passHref>
                        <Link style={{paddingRight: '15px'}}>Contact</Link>
                    </NextLink>
                    <NextLink href='/login' passHref>
                        <Link>Login</Link>
                    </NextLink>
                </div>
            </Box>
        </header>
    )
}

export default navbar
