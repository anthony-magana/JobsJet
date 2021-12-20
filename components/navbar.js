import { useColorMode, Button, Box, Heading } from '@chakra-ui/react'

function navbar() {

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <header>
            <Box w='100%' display='flex' justifyContent='space-between' style={{padding: '10px 5px 10px 10px'}}>
                <Heading as='h1'>Jobs Jet</Heading>
                <Button onClick={toggleColorMode} size='xs'>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
            </Box>
        </header>
    )
}

export default navbar
