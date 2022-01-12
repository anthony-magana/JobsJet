import { useState } from 'react'
import { withPageAuthRequired, useUser, getSession } from "@auth0/nextjs-auth0";
import { Box, FormControl, FormLabel, Input, Select, FormHelperText, NumberInput, NumberInputField, Stack, Button } from "@chakra-ui/react";

function Account({person}) {
    const { user } = useUser();
    const [emailInput, setEmailInput] = useState(user?.email);
    const [nameInput, setNameInput] = useState(user?.nickname);
    const [cityInput, setCityInput] = useState('');
    const [countryInput, setCountryInput] = useState('');
    const [stateInput, setStateInput] = useState('');
    const [aboutInput, setAboutInput] = useState('');
    const [iAm, setIAm] = useState('');
    const [interest, setInterest] = useState('');
    const [yearsExperience, setYearsExperience] = useState('');
    console.log("userProfile: ", person);
    return (
        <Box w="75%" m="0 auto" mt="75px">
            <Box as='h1' fontSize='2xl' fontWeight='bold' mb='10'>Account</Box>
            <Stack maxW='700px' spacing={4}>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        readOnly
                    />
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='first-name'>First name</FormLabel>
                    <Input 
                        id='first-name' 
                        placeholder='First name' 
                        value={nameInput} 
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </FormControl>
                <FormControl mb='5' isRequired>
                    <FormLabel htmlFor='city'>City</FormLabel>
                    <Input 
                        id='city' 
                        placeholder='City'
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                    />
                </FormControl>
                <FormControl mb='5' onChange={(e) => setCountryInput(e.target.value)} isRequired>
                    <FormLabel htmlFor='country'>Country</FormLabel>
                    <Select id='country' placeholder='Select country'>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>United Kingdon</option>
                        <option>United States</option>
                    </Select>
                </FormControl>
                <FormControl mb='5' isRequired onChange={(e) => setStateInput(e.target.value)}>
                    <FormLabel htmlFor='state'>State</FormLabel>
                    <Select id='State' placeholder='Select state'>
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>DC</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                        <option>IL</option>
                        <option>IN</option>
                        <option>IA</option>
                        <option>KS</option>
                        <option>KY</option>
                        <option>LA</option>
                        <option>ME</option>
                        <option>MD</option>
                        <option>MA</option>
                        <option>MI</option>
                        <option>MN</option>
                        <option>MS</option>
                        <option>MO</option>
                        <option>MT</option>
                        <option>NE</option>
                        <option>NV</option>
                        <option>NH</option>
                        <option>NJ</option>
                        <option>NM</option>
                        <option>NY</option>
                        <option>NC</option>
                        <option>ND</option>
                        <option>OH</option>
                        <option>OK</option>
                        <option>OR</option>
                        <option>PA</option>
                        <option>RI</option>
                        <option>SC</option>
                        <option>SD</option>
                        <option>TN</option>
                        <option>TX</option>
                        <option>UT</option>
                        <option>VT</option>
                        <option>VA</option>
                        <option>WA</option>
                        <option>WV</option>
                        <option>WI</option>
                        <option>WY</option>
                    </Select>
                </FormControl>
                <FormControl mb='5'>
                    <FormLabel htmlFor='text-area'>About</FormLabel>
                    <textarea 
                        id='about' 
                        rows="5" 
                        maxLength="300" 
                        placeholder="About ...." 
                        style={{backgroundColor: 'inherit', minWidth: '300px', maxWidth: '700px', width: '100%', border: '1px solid rgb(82,85,94, 0.6)'}} 
                        onChange={(e) => setAboutInput(e.target.value)}
                    />
                    <FormHelperText>Max length is 300 characters</FormHelperText>
                </FormControl>
                <FormControl mb='5' onChange={(e) => setIAm(e.target.value)} isRequired>
                    <FormLabel>Who are you?</FormLabel>
                    <Select placeholder='Select'>
                        <option>Talent</option>
                        <option>Employer</option>
                    </Select>
                </FormControl>
                <FormControl mb='5' onChange={(e) => setInterest(e.target.value)} isRequired>
                    <FormLabel>Field of interest</FormLabel>
                    <Select placeholder='Select'>
                        <option>Engineering</option>
                        <option>Graphic Design</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='number'>Years of experience</FormLabel>
                    <NumberInput max={10} min={0} onChange={(e) => setYearsExperience(e.target.value)}>
                        <NumberInputField maxLength='2' />
                    </NumberInput>
                </FormControl>
                <Button variant='outline' mr={2}>Submit</Button>
            </Stack>
        </Box>
    )
}

export default Account
export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx) {
        const { req } = ctx;
        const res = await fetch(`http://${req.headers.host}/api/profiles`, {
            headers: { Cookie: ctx.req.headers.cookie },
        });
        const { data } = await res.json();

        const user = getSession(ctx.req).user
        const userProfile = data.find(profile => profile.email === user.email)
        if(userProfile !== undefined || userProfile !== null) {
            return { 
                props: { person: userProfile } 
            }
        } else {
            return { 
                props: { person: null } 
            }
        }
    }
});
