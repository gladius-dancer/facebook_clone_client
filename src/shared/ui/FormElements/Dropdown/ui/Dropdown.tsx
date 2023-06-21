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
    error,
}: DropdownType) => {
    const generateSingleOptions = () => options.map((option: any) => (
        <MenuItem key={key} value={option}>
            {option}
        </MenuItem>
    ));

    return (
        <FormControl sx={{ m: 0, minWidth: 110 }} error={error}>
            <InputLabel>{label}</InputLabel>
            <Controller
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <Select onChange={onChange} value={value} size={size}>
                        {generateSingleOptions()}
                    </Select>
                )}
                control={control}
                name={name}
            />
            <FormHelperText>Error</FormHelperText>
        </FormControl>
    );
};
