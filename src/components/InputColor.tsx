import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';

const InputColor = ({ placeholder, value, onChange }: any) => {
    const handleChange = (event: any) => {
        onChange(event.target.value);
    };

    return (
        <FormControl width='200px'>
            <Text color='rgb(102, 115, 127)'>{placeholder}</Text>
            <FormLabel
                display='flex'
                w='100%'
                alignItems='center'
                border='1px solid #BFBFD9;'
                justifyContent='space-between'
                bgColor='#FAFAFF;'
                borderRadius='4px'
                paddingLeft='8px'
                cursor='pointer'
                _focus={{
                    borderColor: '#5d5adc',
                }}
            >
                {value}
                <Input
                    m='0'
                    p='0'
                    w='40px'
                    type='color'
                    value={value}
                    onChange={handleChange}
                    border='none'
                    borderRadius='4px'
                    cursor='pointer'
                />
            </FormLabel>
        </FormControl>
    );
};

export default InputColor;
