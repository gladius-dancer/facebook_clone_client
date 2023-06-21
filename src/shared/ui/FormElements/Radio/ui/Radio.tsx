import React from 'react';
import { FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import Radio from '@mui/material/Radio';
import { RadioType } from '../type/RadioType';

export const InputRadio = ({
    name,
    error,
    label,
    checked,
    onChange,
}: RadioType) => {
    const generateRadioOptions = () => (
        <FormControl>
            <div className="d-flex align-items-center">
                <FormControlLabel
                    control={(
                        <Radio
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
};
