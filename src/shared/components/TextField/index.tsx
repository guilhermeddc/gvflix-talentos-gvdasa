import React, {useEffect, useState} from 'react';

import {
  TextField as MuiTextField,
  TextFieldProps,
  Skeleton,
} from '@mui/material';
import {useField} from '@unform/core';

type TVTextFieldProps = Omit<TextFieldProps, 'value'> & {
  name: string;
  isLoading?: boolean | undefined;
  skeletonWidth?: number | undefined;
  skeletonHeight?: number | undefined;
};
export const TextField: React.FC<TVTextFieldProps> = ({
  name,
  isLoading,
  skeletonWidth,
  skeletonHeight = 70,
  onChange,
  ...rest
}) => {
  const {fieldName, defaultValue, registerField, error} = useField(name);
  const [value, setValue] = useState(defaultValue || '');

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, value) => setValue(value),
    });
  }, [fieldName, value, registerField]);

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    value: string,
  ) => {
    setValue(value);
    onChange && onChange(event);
  };

  if (isLoading)
    return <Skeleton height={skeletonHeight} width={skeletonWidth} />;

  return (
    <MuiTextField
      {...rest}
      value={value}
      fullWidth
      error={!!error}
      helperText={error}
      variant="outlined"
      onChange={(e) => handleChange(e, e.target.value)}
    />
  );
};
