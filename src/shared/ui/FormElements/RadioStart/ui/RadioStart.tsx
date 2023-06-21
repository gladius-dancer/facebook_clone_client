import React from 'react';
import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import Radio from '@mui/material/Radio';
import { RadioStartType } from '../type/RadioStartType';

export const InputRadioStart = ({
    key,
    name,
    error,
    label,
    checked,
    onChange,
}: RadioStartType) => (
    <FormControl>
        <div className="d-flex align-items-center">
            <FormControlLabel
                key={key}
                control={(
                    <Radio
                        checked={checked}
                        onChange={onChange}
                        name={name}
                        color="primary"
                    />
                )}
                label={label}
                labelPlacement="start"
            />
            {error && <FormHelperText>{error}</FormHelperText>}
        </div>
    </FormControl>
);
