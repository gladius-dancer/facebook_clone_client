import React from 'react';
import {
    FormControl, FormHelperText, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { DropdownType } from '../type/DropdownType';

export const Dropdown = ({
    key,
    name,
    control,
    label,
    options,
    size,
}: DropdownType) => {
    const generateSingleOptions = () => options.map((option: any) => (
        <MenuItem key={key} value={option}>
            {option}
        </MenuItem>
    ));

    return (
        <FormControl sx={{ m: 0, minWidth: 110 }}>
            <InputLabel>{label}</InputLabel>
            <Controller
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <Select onChange={onChange} value={value} size={size} error={Boolean(error)}>
                            {generateSingleOptions()}
                        </Select>
                        <FormHelperText error>{error ? error.message : null}</FormHelperText>
                    </>

                )}
                control={control}
                name={name}
            />

        </FormControl>
    );
};
