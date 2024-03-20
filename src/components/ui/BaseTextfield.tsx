import { InputBase, InputBaseProps } from '@mui/material';

export const BaseTextfield = (props: InputBaseProps) => {
    return (
        <>
            <InputBase {...props} slot="hello" />
        </>
    );
};
