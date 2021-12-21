import { Divider, Text, Link } from '@chakra-ui/react'

function footer() {
    return (
        <footer style={{width: '75%', margin: '25px auto'}}>
            <Divider size='2px' />
            <Text align='center' style={{marginTop: '25px'}}>
                This site is <Link color='purple.500' href='#'>open source </Link> 
                and was created with <Link color='purple.500' href='https://chakra-ui.com/' target='_blank'>Chakra UI </Link> and 
                <Link color='purple.500' href='https://nextjs.org/' target='_blank'> Nextjs</Link>
            </Text>
        </footer>
    )
}

export default footer
