import * as React from 'react';
import {Controller} from 'react-hook-form';
import {InputTextType} from '../type/InputTextType';
import {Box, FormControl, Input, InputLabel} from "@mui/material";

export const InputFile = ({
                              key,
                              name,
                              control,
                              className,
                              register,
                              fileName
                          }: InputTextType) => (
        <Controller
            key={key}
            name={name}
            control={control}
            defaultValue=""
            render={({field: {onChange}, fieldState: {error}}) => (
                <div className={className}>
                    <InputLabel htmlFor="file">
                        {fileName?.[0]?.name?.length > 0 ? fileName?.[0]?.name : "Выберите файл"}
                    </InputLabel>
                    <Input
                        type="file"
                        id="file"
                        onChange={onChange}
                        {...register("file")}
                    />
                    <span></span>
                </div>
            )}

        />
    )
;
