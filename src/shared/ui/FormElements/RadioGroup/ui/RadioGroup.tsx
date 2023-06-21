import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

type RadioGroupItemType = {
    value: string,
    label: string
}

type RadioGroupeType = {
    name: string,
    items: RadioGroupItemType[],
    className: string
};
function RadioGroupComponent({ name, items, className }: RadioGroupeType) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };
    return (
        <FormControl>
            <RadioGroup
                name={name}
                value={value}
                onChange={handleChange}
                className={className}
            >
                {items.map((item: RadioGroupItemType) => (
                    <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                ))}

            </RadioGroup>
        </FormControl>
    );
}

export default RadioGroupComponent;
