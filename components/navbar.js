import { 
    useColorMode, 
    IconButton, 
    Box, 
    Heading, 
    Link, 
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    useMediaQuery,
    Button
} from '@chakra-ui/react'
import NextLink from "next/link"
import { useRouter } from 'next/router'
import {MoonIcon, SunIcon, HamburgerIcon} from '@chakra-ui/icons'
import { useUser } from '@auth0/nextjs-auth0';

function Navbar() {

    const { colorMode, toggleColorMode } = useColorMode()
    const { user, error, isLoading } = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isMobile] = useMediaQuery('(max-width: 762px)')
    const router = useRouter()

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>{error.message}</div>
    }


    return (
        <header>
            <Box w='100%' display='flex' justifyContent='space-between' style={{padding: '10px 0 10px 0', width: '75%', margin: '0 auto'}}>
                <Heading as='h1' size='xl'>Jobs Jet</Heading>
                {!isMobile &&
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
                        {!user &&
                            (<NextLink href='/api/auth/login' passHref>
                                <Button size='sm'>Login</Button>
                            </NextLink>
                            )
                        } 
                        {user && router.asPath !== '/dashboard' ? 
                            (<NextLink href='/dashboard' passHref>
                                <Button size='sm'>dashboard</Button>
                            </NextLink>
                            ) : user &&
                            (<NextLink href='/api/auth/logout' passHref>
                                <Button size='sm'>Logout</Button>
                            </NextLink>
                            )
                        }
                    </div>
                }
                { isMobile &&
                    <IconButton aria-label='toggle menu' onClick={onOpen} icon={ <HamburgerIcon />} />
                }
                <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton mt='10px' />
                        <DrawerHeader>{colorMode} mode: <IconButton onClick={toggleColorMode} ml='15px' variant="outline" aria-label='toggle color mode' icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} /></DrawerHeader>
                        <DrawerBody display='flex' flexDir='column' alignItems='center' textAlign='center' justifyContent='center'>
                            <NextLink href='/' passHref>
                                <Link onClick={onClose} fontSize='xl' mb='5'>Home</Link>
                            </NextLink>
                            <NextLink href='/about' passHref>
                                <Link onClick={onClose} fontSize='xl' mb='5' >About</Link>
                            </NextLink>
                            <NextLink href='/contact' passHref>
                                <Link onClick={onClose} fontSize='xl' mb='5'>Contact</Link>
                            </NextLink>
                            {!user &&
                                (<NextLink href='/api/auth/login' passHref>
                                    <Link onClick={onClose} fontSize='xl' mb='5' >Login</Link>
                                </NextLink>
                                ) 
                            }
                            {user && router.asPath !== '/dashboard' ? 
                                (<NextLink href='/dashboard' passHref>
                                    <Link onClick={onClose} fontSize='xl' mb='5'>Dashboard</Link>
                                </NextLink>
                                ) : user &&
                                (<NextLink href='/api/auth/logout' passHref>
                                    <Link onClick={onClose} fontSize='xl' mb='5'>Logout</Link>
                                </NextLink>
                                )
                            }
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </header>
    )
}

export default Navbar
