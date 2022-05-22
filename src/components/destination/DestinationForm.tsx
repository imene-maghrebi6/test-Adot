import React from "react"
import { Formik, Form } from "formik"
import * as yup from "yup"
import { FormikProps } from "formik/dist/types"
import { Grid, Box, Button, GridSize } from "@material-ui/core"
import { FormikTextField, FormikSwitch } from "../../components"
import { Destination, initialDestination } from "../../models"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { makeStyles } from "@material-ui/styles"

const useStyles: () => ClassNameMap<any> = makeStyles({
  field : {
    paddingBottom : 10
  },
  groupedButtons : {
    display              : "flex",
    justifyContent       : "flex-end",
    "& > *:first-child " : {
      marginRight : 30
    }
  }
})

interface DestinationFormProps {
  onSubmit: (values: Destination) => void
  onClose: () => void
}

interface FormikSkeleton {
  name: string
  placeholder: string
  type: string
  md: GridSize
  xs: GridSize
  sm: GridSize
  focused?: boolean
}

export const DestinationForm = ({ onSubmit, onClose }: DestinationFormProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  const validationSchema: yup.SchemaOf<Destination> = yup.object().shape({
    name          : yup.string().required("Ce champ est requis"),
    address       : yup.string().required("Ce champ est requis"),
    imgLink       : yup.string().required("Ce champ est requis"),
    habitantNbr   : yup.number().required("Ce champ est requis").min(0, "Ce champ doit être supérieur ou égal à 0"),
    hotelNbr      : yup.number().required("Ce champ est requis").min(0, "Ce champ doit être supérieur ou égal à 0"),
    averageIncome : yup.number().required("Ce champ est requis").min(0, "Ce champ doit être supérieur ou égal à 0"),
    size          : yup.number().required("Ce champ est requis").min(0, "Ce champ doit être supérieur ou égal à 0"),
    activated     : yup.boolean().required("Ce champ est requis")
  })

  const fields: FormikSkeleton[] = [
    { name: "name",          placeholder: "Nom de la destination", type: "string", md: 12, xs: 12, sm: 12 },
    { name: "address",       placeholder: "Adresse",               type: "string", md: 12, xs: 12, sm: 12, focused: true },
    { name: "imgLink",       placeholder: "Lien de l'image",       type: "string", md: 12, xs: 12, sm: 12 },
    { name: "habitantNbr",   placeholder: "Nb Habitants",          type: "number", md: 3,  xs: 12, sm: 6 },
    { name: "hotelNbr",      placeholder: "Nb Hôtels",             type: "number", md: 3,  xs: 12, sm: 6 },
    { name: "averageIncome", placeholder: "Revenu Moy",            type: "number", md: 3,  xs: 12, sm: 6 },
    { name: "size",          placeholder: "Superficie",            type: "number", md: 3,  xs: 12, sm: 6 }
  ]

  return (
    <div>
      <Formik
        initialValues={initialDestination}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnChange={true}
        validateOnMount={true}
      >
        {(props: FormikProps<Destination>) => {
          return (
            <Form>
              <Grid container spacing={1}>
                {fields.map((field: FormikSkeleton, index: number) => (
                  <Grid key={index} item md={field.md} xs={field.xs} sm={field.sm}>
                    <FormikTextField {...field} size="small" className={classes.field} />
                  </Grid>
                ))}
                <FormikSwitch
                  name="activated"
                  label="Activer"
                  className={classes.field}
                />
              </Grid>
              <Grid item md={12} xs={12}>
                <Box className={classes.groupedButtons}>
                  <Button
                    onClick={onClose}
                    color="primary"
                  >
                    cancel
                  </Button>
                  <Button
                    type={"submit"}
                    disabled={!props.isValid}
                    color="secondary"
                  >
                    confirm
                  </Button>
                </Box>
              </Grid>
            </Form>
          )}
        }
      </Formik>
    </div>
  )
}