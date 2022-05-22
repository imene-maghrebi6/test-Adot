import React from "react"
import { TextField } from "@material-ui/core"
import { FieldProps } from "formik/dist/Field"
import { Field, FieldInputProps } from "formik"
import _ from "lodash"
import { FormikProps } from "formik/dist/types"
import { TextFieldProps } from "@material-ui/core/TextField/TextField"
import { FormikErrors, FormikTouched } from "formik"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { makeStyles } from "@material-ui/styles"

type FkErrors<V = any> = string | string[] | FormikErrors<V> | FormikErrors<V>[]
type FkTouched<V = any> = FormikTouched<V>[] | boolean | FormikTouched<V>

const useStyles: () => ClassNameMap<any> = makeStyles({
  root : {
    "& > .MuiFilledInput-root" : {
      opacity : 0.6
    }
  }
})

export const FormikTextField = (props: TextFieldProps & Record<string, any>): JSX.Element => {
  return (
    <Field {...props} component={FkTextFieldCp} />
  )
}

const FkTextFieldCp = ({ field, form, ...others }: FieldProps<string>): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  const { errors, touched }: FormikProps<any> = form
  const { value }: FieldInputProps<string> = field
  const error: any = _.get(errors, field.name)
  const fieldTouched: FkTouched = _.get(touched, field.name)

  return (
    <TextField
      {...field}
      {...others}
      value={value || ""}
      variant="filled"
      helperText={fieldTouched && error}
      error={!!error && !!fieldTouched}
      fullWidth
      classes={{ root: classes.root }}
    />
  )
}
