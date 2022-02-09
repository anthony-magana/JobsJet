import React, {useState} from 'react';
import { Box, Heading, Input, InputGroup, Textarea, Button } from "@chakra-ui/react";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleContact = (e) => {
        e.preventDefault();
        console.log("sending....");

        const data = {
            name,
            email,
            subject,
            message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
              console.log('Response succeeded!')
              setName('')
              setEmail('')
              setSubject('')
              setMessage('')
            }
          }).catch((err) => {
            console.log('Response failed!')
            console.log(err)
          });
    }

    return (
        <Box w="75%" m="0 auto" mt="75px" mb='33vh'>
            <Heading as="h1" fontSize="2xl" mb="10px">Contact</Heading>
            <form onSubmit={handleContact}>
                <InputGroup m='0 auto' display='flex' flexDir='column'>
                    <Input mt='10px' type='text' placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input mt='10px' type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <Input mt='10px' type='text' placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    <Textarea mt='10px' maxLength='300' placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    <Button mt='10px' type='submit'>Submit</Button>
                </InputGroup>
            </form>
        </Box>
    )
}

export default Contact
