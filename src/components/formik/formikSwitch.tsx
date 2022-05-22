import React from "react"
import { Field } from "formik"
import { FieldProps } from "formik/dist/Field"
import { FormControlLabel, Switch } from "@material-ui/core"
import { FormControlLabelProps } from "@material-ui/core/FormControlLabel/FormControlLabel"

export interface SwitchInputProps extends Omit<FormControlLabelProps, "control">{}

export const FormikSwitch = (props: SwitchInputProps): JSX.Element => {
  return (
    <Field {...props} component={FkSwitchCp} />
  )
}

export interface SwitchProps extends FieldProps<string> {
  label: string
}

const FkSwitchCp = ({ field, label }: SwitchProps): JSX.Element => {

  return (
    <FormControlLabel
      label={label}
      {...field}
      control={<Switch  />}

    />
  )
}
