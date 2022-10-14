import { Box, Heading, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import InputColor from './InputColor';
import ColorButtons from './ColorButtons';
import { useState } from 'react';

const Form = () => {
    const [themeColor, setThemeColor] = useState('#ffeb3b');
    const [inputColor, setInputColor] = useState('#5d5adc');

    return (
        <Box fontFamily="Inter, sans-serif, NotoColorEmojiLimited, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'">
            <Heading as='h2' fontSize='22px' padding='32px 16px' bgColor='#FAFAFA' m='0' border='1px solid #EDF0F2'>
                Customize chat theme
            </Heading>
            <Box padding='16px'>
                <Heading as='h3' fontSize='18px' fontWeight='medium' mb='1rem'>
                    Theme color
                </Heading>
                <ColorButtons
                    value={themeColor}
                    onChange={setThemeColor}
                    options={['#ffeb3b', '#ffc107', '#a2cf6e', '#009688', '#00bcd4', '#e91e63']}
                />

                <Heading as='h3' fontSize='18px' fontWeight='medium' mb='1rem'>
                    Dialog window
                </Heading>
                <InputColor value={inputColor} onChange={setInputColor} placeholder='background color' />

                <RadioGroup>
                    <Stack direction='column'>
                        <Radio colorScheme='purple' value='1'>
                            First
                        </Radio>
                        <Radio colorScheme='purple' value='2'>
                            Second
                        </Radio>
                        <Radio colorScheme='purple' value='3'>
                            Third
                        </Radio>
                    </Stack>
                </RadioGroup>
            </Box>
        </Box>
    );
};

export default Form;
