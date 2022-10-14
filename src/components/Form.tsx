import { Box, Heading, Flex } from '@chakra-ui/react';
import InputColor from './InputColor';
import ColorButtons from './ColorButtons';
import { useEffect, useState } from 'react';

type ThemeColor =
    | string
    | {
          brand1: string;
          brand2: string;
          brand3: string;
      };

type Values = {
    themeColor: ThemeColor;
    bgColor: string;
};

type FormProps = {
    onSubmit?: (values: Values) => void;
};

const Form = ({ onSubmit }: FormProps) => {
    const [themeColor, setThemeColor] = useState('#ffeb3b');
    const [brand1, setBrand1] = useState('#5dc99b');
    const [brand2, setBrand2] = useState('#f8f8f8');
    const [brand3, setBrand3] = useState('#e7f6f0');
    const [bgColor, setBgColor] = useState('#5d5adc');

    useEffect(() => {
        const values: any = {};

        if (themeColor === 'custom') {
            values.themeColor = {
                brand1,
                brand2,
                brand3,
            };
        } else {
            values.themeColor = themeColor;
        }

        values.bgColor = bgColor;

        onSubmit?.(values);
        // eslint-disable-next-line
    }, [themeColor, brand1, brand2, brand3, bgColor]);

    return (
        <Box fontFamily="Inter, sans-serif, NotoColorEmojiLimited, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'">
            <Heading as='h2' fontSize='22px' padding='32px 16px' bgColor='#FAFAFA' m='0' border='1px solid #EDF0F2'>
                Customize chat theme
            </Heading>
            <Box padding='16px'>
                <Box mb='30px'>
                    <Heading as='h3' fontSize='18px' fontWeight='medium' mb='1rem'>
                        Theme color
                    </Heading>
                    <ColorButtons
                        value={themeColor}
                        onChange={setThemeColor}
                        options={['#ffeb3b', '#ffc107', '#a2cf6e', '#009688', '#00bcd4', '#e91e63', 'custom']}
                    />
                    {themeColor === 'custom' && (
                        <Flex gap='12px'>
                            <InputColor value={brand1} onChange={setBrand1} placeholder='brand-1' />
                            <InputColor value={brand2} onChange={setBrand2} placeholder='brand-2' />
                            <InputColor value={brand3} onChange={setBrand3} placeholder='brand-3' />
                        </Flex>
                    )}
                </Box>

                <Box mb='30px'>
                    <Heading as='h3' fontSize='18px' fontWeight='medium' mb='1rem'>
                        Dialog window
                    </Heading>
                    <InputColor value={bgColor} onChange={setBgColor} placeholder='background color' />
                </Box>

                {/* <RadioGroup value={bgImage} onChange={setBgImage}>
                    <Stack direction='column'>
                        <Radio colorScheme='purple' value='none'>
                            None
                        </Radio>
                        <Radio colorScheme='purple' value='gradient'>
                            Gradient
                        </Radio>
                        {bgImage === 'gradient' && (
                            <InputColor value={bgColor} onChange={setBgColor} placeholder='background color' />
                        )}
                    </Stack>
                </RadioGroup> */}
            </Box>
        </Box>
    );
};

export default Form;
