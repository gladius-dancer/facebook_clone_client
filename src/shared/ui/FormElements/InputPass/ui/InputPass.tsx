import * as React from 'react';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormControl, FormHelperText } from '@mui/material';
import { InputPassType } from '../type/InputPassType';

export const InputPass = ({
    name,
    control,
    placeholder,
    size,
}: InputPassType) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>,
    ) => {
        event.preventDefault();
    };

    return (
        <FormControl>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <OutlinedInput
                            error={Boolean(error)}
                            size={size}
                            value={value}
                            onChange={onChange}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={(
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )}
                            placeholder={placeholder}
                        />
                        <FormHelperText error>{error ? error.message : null}</FormHelperText>
                    </>
                )}
            />
        </FormControl>
    );
};
