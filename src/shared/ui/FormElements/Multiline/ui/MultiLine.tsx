import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { MultilineType } from '../type/MultilineType';

export const MultiLine = ({
    key,
    name,
    control,
    error,
    label,
    size,
    placeholder,
    className,
}: MultilineType) => (
    <Controller
        key={key}
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
                rows={3}
                placeholder={placeholder}
                className={className}
            />
        )}
    />
);
