import * as React from 'react';
import {Controller} from 'react-hook-form';
import {InputTextType} from '../type/InputTextType';
import {Box, FormControl, Input, InputLabel} from "@mui/material";

export const InputFile = ({
                              key,
                              name,
                              control,
                              className,
                              register
                          }: InputTextType) => (
        <Controller
            key={key}
            name={name}
            control={control}
            defaultValue=""
            render={({field: {onChange, value}, fieldState: {error}}) => (
                <div className={className}>
                    <InputLabel htmlFor="file">
                        Выберите файл
                    </InputLabel>
                    <Input
                        type="file"
                        id="file"
                        // value={value}
                        onChange={onChange}
                        {...register("file")}
                    />
                    {/*<span>{value.slice(12, value.length)}</span>*/}
                </div>
            )}

        />
    )
;
