import { useState } from 'react'
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Box, FormControl, FormLabel, Input, Select, FormHelperText, NumberInput, NumberInputField } from "@chakra-ui/react";

function Account() {
    const [emailInput, setEmailInput] = useState('')

    return (
        <Box w="75%" m="0 auto" mt="75px">
            <Box as='h1' fontSize='2xl' fontWeight='bold' mb='10'>Account</Box>
            <Box maxW='700px'>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='first-name'>First name</FormLabel>
                    <Input id='first-name' placeholder='First name' />
                </FormControl>
                <FormControl mb='5'>
                    <FormLabel htmlFor='address'>Address</FormLabel>
                    <Input id='address' placeholder='Address' />
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='country'>Country</FormLabel>
                    <Select id='country' placeholder='Select country'>
                        <option>United States</option>
                        <option>United Kingdon</option>
                    </Select>
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input id='city' placeholder='City' />
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='state'>State</FormLabel>
                    <Select id='State' placeholder='Select state'>
                        <option>CA</option>
                        <option>NV</option>
                    </Select>
                </FormControl>
                <FormControl mb='5'>
                    <FormLabel htmlFor='text-area'>About</FormLabel>
                    <textarea id='about' rows="5" maxLength="200" placeholder="About ...." style={{backgroundColor: 'inherit', minWidth: '300px', maxWidth: '700px', width: '100%', border: '1px solid rgb(82,85,94, 0.6)'}} />
                    <FormHelperText>Max length is 200 characters</FormHelperText>
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel>Who are you?</FormLabel>
                    <Select placeholder='Select'>
                        <option>Talent</option>
                        <option>Employer</option>
                    </Select>
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel>Field of interest</FormLabel>
                    <Select placeholder='Select'>
                        <option>Engineering</option>
                        <option>Graphic Design</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='number'>Years of experience</FormLabel>
                    <NumberInput max={10} min={0}>
                        <NumberInputField maxLength='2' />
                    </NumberInput>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Account
export const getServerSideProps = withPageAuthRequired();
