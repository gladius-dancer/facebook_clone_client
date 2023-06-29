import * as React from 'react';
import { Controller } from 'react-hook-form';
import { InputTextType } from '../type/InputTextType';

export const InputFile = ({
    key,
    name,
    control,
    placeholder,
    status,
    className,
}: InputTextType) => (
    <Controller
        key={key}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
            <input
                type="file"
                className={className}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                disabled={!status}
            />
        )}
    />
);
