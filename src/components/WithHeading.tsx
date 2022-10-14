import { FormControl, Text } from '@chakra-ui/react';

const InputColor = ({ title, children }: any) => {
    return (
        <FormControl width='200px'>
            <Text color='rgb(102, 115, 127)'>{title}</Text>

            {children}
        </FormControl>
    );
};

export default InputColor;
