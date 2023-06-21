import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputTextType } from '../type/InputTextType';

export const InputText = ({
    key,
    name,
    control,
    placeholder,
    label,
    status,
    size,
    className,
}: InputTextType) => (
    <Controller
        key={key}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField
                className={className}
                placeholder={placeholder}
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                value={value}
                label={label}
                variant="outlined"
                disabled={!status}
                size={size}
            />
        )}
    />
);
