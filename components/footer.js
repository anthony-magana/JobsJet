import { Divider, Text, Link } from '@chakra-ui/react'

function Footer() {
    return (
        <footer style={{width: '75%', margin: '25px auto'}}>
            <Divider />
            <Text align='center' fontSize={{base: 'smaller', sm: 'sm', md:'sm', lg:'md'}} style={{marginTop: '25px'}}>
                This site is <Link color='purple.500' href='#'>open source </Link> 
                and was created with <Link color='purple.500' href='https://chakra-ui.com/' target='_blank'>Chakra UI </Link>,
                <Link color='purple.500' href='https://nextjs.org/' target='_blank'> Nextjs</Link>, and <Link color='purple.500' href='https://www.mongodb.com/atlas/database/' target='_blank'> MongoDB Atlas</Link>
            </Text>
        </footer>
    )
}

export default Footer
