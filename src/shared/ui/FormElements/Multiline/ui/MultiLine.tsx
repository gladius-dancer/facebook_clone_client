import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { MultilineType } from '../type/MultilineType';

export const MultiLine = ({
    name,
    control,
    error,
    label,
    size,
    placeholder,
    className,
    maxRows,
}: MultilineType) => (
    <Controller
        key={name}
        name={name}
        control={control}
        defaultValue=""
        render={({
            field: { onChange, value },
            fieldState: { error },
        }) => (
            <TextField
                helperText={error ? error.message : null}
                size={size}
                error={!!error}
                onChange={onChange}
                value={value}
                fullWidth
                label={label}
                variant="outlined"
                multiline
                maxRows={maxRows}
                placeholder={placeholder}
                className={className}
            />
        )}
    />
);
