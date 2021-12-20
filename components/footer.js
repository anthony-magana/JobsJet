import { Divider, Text } from '@chakra-ui/react'

function footer() {
    return (
        <footer style={{width: '75%', margin: '25px auto'}}>
            <Divider size='2px' />
            <Text style={{marginTop: '25px'}}>This site is open source and was created with Chakra UI and Nextjs</Text>
        </footer>
    )
}

export default footer
