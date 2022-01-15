import { useState, useEffect } from 'react'
import { withPageAuthRequired, useUser, getSession } from "@auth0/nextjs-auth0";
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { Box, FormControl, FormLabel, Input, Select, FormHelperText, NumberInput, NumberInputField, Stack, Button, CircularProgress } from "@chakra-ui/react";

function Account({person}) {
    const { user } = useUser();
    const router = useRouter();
    const [emailInput, setEmailInput] = useState(user?.email);
    const [nameInput, setNameInput] = useState(person != null ? person.name : user?.nickname);
    const [cityInput, setCityInput] = useState(person?.city);
    const [stateInput, setStateInput] = useState(person?.state);
    const [aboutInput, setAboutInput] = useState(person?.about);
    const [iAm, setIAm] = useState(person?.category);
    const [interest, setInterest] = useState(person?.interest);
    const [yearsExperience, setYearsExperience] = useState(person?.experience);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if(isSubmitting) {
            if(Object.keys(errors).length === 0) {
                createProfile();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createProfile = async () => {
        try {
            let link;
            let method;
            if(person != null) {
                link = `/api/profiles/${person._id}`;
                method = 'PUT';
            } else {
                link = `/api/profiles`;
                method = 'POST';
            }
            const res = await fetch(`http://localhost:3000${link}`, {
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput,
                    name: nameInput,
                    city: cityInput,
                    state: stateInput,
                    about: aboutInput,
                    category: iAm,
                    interest: interest,
                    experience: yearsExperience
                })
            });
            router.push('/dashboard');
            setIsSubmitting(false);
        } catch(err) {
            console.log(err);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    }

    const validate = () => {
        let errs = {};
        if (!emailInput) {
            errs.email = "Email is required";
        }
        if (!nameInput) {
            errs.name = "Name is required";
        }
        if (!cityInput) {
            errs.city = "City is required";
        }
        if (!stateInput) {
            errs.state = "State is required";
        }
        if (!iAm) {
            errs.iAm = "Who are you is required";
        }
        if (!interest) {
            errs.interest = "Interest is required";
        }
        console.log("errs: ", errs);
        return errs;
    }

    return (
        <Box w="75%" m="0 auto" mt="75px">
            <Box as='h1' fontSize='2xl' fontWeight='bold' mb='10'>Account</Box>
            {isSubmitting ? <CircularProgress isIndeterminate color='blue' /> :
            <form onSubmit={handleSubmit}>
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
                    <FormControl mb='5' isRequired>
                        <FormLabel htmlFor='state'>State</FormLabel>
                        <Select id='State' placeholder='Select state' value={stateInput} onChange={(e) => setStateInput(e.target.value)}>
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
                            value={aboutInput}
                            style={{backgroundColor: 'inherit', minWidth: '300px', maxWidth: '700px', width: '100%', border: '1px solid rgb(82,85,94, 0.6)'}} 
                            onChange={(e) => setAboutInput(e.target.value)}
                        />
                        <FormHelperText>Max length is 300 characters</FormHelperText>
                    </FormControl>
                    <FormControl mb='5' isRequired>
                        <FormLabel>Who are you?</FormLabel>
                        <Select placeholder='Select' value={iAm} onChange={(e) => setIAm(e.target.value)}>
                            <option>Talent</option>
                            <option>Employer</option>
                        </Select>
                    </FormControl>
                    <FormControl mb='5' isRequired>
                        <FormLabel>Field of interest</FormLabel>
                        <Select placeholder='Select' value={interest} onChange={(e) => setInterest(e.target.value)}>
                            <option>Engineering</option>
                            <option>Graphic Design</option>
                        </Select>
                    </FormControl>
                    <FormControl onChange={(e) => setYearsExperience(e.target.value)}>
                        <FormLabel htmlFor='number'>Years of experience</FormLabel>
                        <NumberInput max={10} min={0} value={yearsExperience}>
                            <NumberInputField maxLength='2' />
                        </NumberInput>
                    </FormControl>
                    <Button variant='outline' type='submit' mr={2}>Submit</Button>
                </Stack>
            </form>
            }
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
        if(userProfile != undefined || userProfile != null) {
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
