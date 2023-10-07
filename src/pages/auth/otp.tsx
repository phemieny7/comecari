import React from 'react';
// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    HStack,
    useColorModeValue,
    FormErrorMessage,
    PinInput, PinInputField,
} from '@chakra-ui/react';
// Custom components
import DefaultAuthLayout from 'layouts/auth/Default';
// Assets
import Background from 'img/auth/banner5.jpg'
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import { useAddNumber } from 'services'
import { useMutation } from "@tanstack/react-query"

export default function OTP() {
    // Chakra color mode
    const textColor = useColorModeValue('navy.700', 'white');
    const textColorSecondary = 'gray.400';
    const brandStars = useColorModeValue('brand.500', 'brand.400');
    const [show, setShow] = React.useState(false);

    const [message, setMessage] = React.useState('');
    const addNumber = useMutation(useAddNumber);
    const onSubmit = async (data: any) => {
        await addNumber.mutateAsync(data, {
            onSuccess: (data) => {
                toast.success(data.message, {
                    autoClose: 3000,
                    closeOnClick: true,

                })
            },

            onError: (error: any) => {
                setMessage(error)
                setShow(true)
                toast.error(error.message)
            }
        });
    }



    const { handleSubmit, control, formState: { errors } } = useForm();
    return (
        <DefaultAuthLayout illustrationBackground={Background.src}>
            <ToastContainer
                theme="light"
            />

            <Flex
                maxW={{ base: '100%', md: 'max-content' }}
                w='100%'
                mx={{ base: 'auto', lg: '0px' }}
                me='auto'
                h='100%'
                alignItems='start'
                justifyContent='center'
                mb={{ base: '30px', md: '60px' }}
                px={{ base: '25px', md: '0px' }}
                mt={{ base: '40px', md: '14vh' }}
                flexDirection='column'>
                <Box me='auto'>
                    <Heading color={textColor} fontSize='36px' mb='10px'>
                        Enter OTP
                    </Heading>
                    <Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
                        We sent an OTP to your number
                    </Text>
                </Box>
                <Flex
                    zIndex='2'
                    direction='column'
                    w={{ base: '100%', md: '420px' }}
                    maxW='100%'
                    background='transparent'
                    borderRadius='15px'
                    mx={{ base: 'auto', lg: 'unset' }}
                    me='auto'
                    mb={{ base: '20px', md: 'auto' }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel display='flex' ms='4px' fontSize='sm' fontWeight='500' color={textColor} mb='8px'>
                                OTP<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Controller
                                name="otp"
                                defaultValue="" // Provide an initial value here
                                control={control}
                                render={({ field }) =>
                                    // <Input
                                    //     isRequired={true}
                                    //     variant='auth'
                                    //     fontSize='sm'
                                    //     ms={{ base: '0px', md: '0px' }}
                                    //     type="tel"
                                    //     placeholder='+2348000000000'
                                    //     mb='24px'
                                    //     fontWeight='500'
                                    //     size='lg'
                                    //     {...field}
                                    // />

                                    <HStack mb={4} justify='space-between'>
                                        <PinInput otp size="lg" w='full'>
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                            <PinInputField />
                                        </PinInput>
                                    </HStack>
                                }
                            />
                            <FormErrorMessage>{show && message}</FormErrorMessage>
                        </FormControl>
                        <FormControl>

                            <Button fontSize='sm' variant='brand' fontWeight='500' w='100%' h='50' mb='24px' type="submit">
                                Enter OTP
                            </Button>
                        </FormControl>
                    </form>
                </Flex>
            </Flex>
        </DefaultAuthLayout>
    )
}