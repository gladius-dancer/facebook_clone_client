import React from 'react';
import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { CheckboxType } from '../type/CheckboxType';

export const InputCheckbox = ({
    key,
    name,
    error,
    label,
    checked,
    onChange,
}: CheckboxType) => (
    <FormControl>
        <div className="d-flex align-items-center">
            <FormControlLabel
                control={(
                    <Checkbox
                        key={key}
                        checked={checked}
                        onChange={onChange}
                        name={name}
                        color="primary"
                    />
                )}
                label={label}
            />
            {error && <FormHelperText>Please agree ...</FormHelperText>}
        </div>
    </FormControl>
);
