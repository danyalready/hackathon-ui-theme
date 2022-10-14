import { useRadio, useRadioGroup, HStack, Box } from '@chakra-ui/react';

const RadioCard = (props: any) => {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
        <Box as='label' p='10px'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                bgColor={props.children !== 'custom' && props.children}
                bgImage={props.children === 'custom' ? 'linear-gradient(30deg, #ffeb3b, #e91e63, #5d5adc)' : 'none'}
                w='25px'
                h='25px'
                borderRadius='50%'
                _checked={{
                    outline: '3px solid #5d5adc',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
            />
        </Box>
    );
};

function RadioButtons({ value, onChange, options }: any) {
    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'color',
        value: value,
        onChange: onChange,
    });

    const group = getRootProps();

    return (
        <HStack {...group}>
            {options.map((value: string) => {
                const radio = getRadioProps({ value });
                return (
                    <RadioCard key={value} {...radio}>
                        {value}
                    </RadioCard>
                );
            })}
        </HStack>
    );
}

export default RadioButtons;
