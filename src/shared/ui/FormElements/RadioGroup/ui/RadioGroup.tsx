import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Controller } from 'react-hook-form';

type RadioGroupItemType = {
    value: string,
    label: string
}

type RadioGroupeType = {
    name: string,
    items: RadioGroupItemType[],
    className: string,
    control: any
};
function RadioGroupComponent({
    name, items, className, control,
}: RadioGroupeType) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={items[0].value}
            rules={{ required: 'Please select an option' }}
            render={({ field }) => (
                <RadioGroup {...field} className={className}>
                    {items.map((item: RadioGroupItemType) => (
                        <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                    ))}
                </RadioGroup>
            )}
        />
    );
}
export default RadioGroupComponent;
