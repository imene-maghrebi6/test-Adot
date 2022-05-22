import React from "react"
import { Destination } from "../../models"
import { Card, CardMedia, CardContent, Typography, Grid, Switch, Divider } from "@material-ui/core"
import { FormattedNumber } from "react-intl"
import { NumberFormatOptions } from "@formatjs/ecma402-abstract"
import { makeStyles } from "@material-ui/core/styles"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"

const useStyles: () => ClassNameMap<any> =  makeStyles({
  root : {
    maxWidth     : 500,
    minHeight    : 320,
    maxHeight    : 320,
    boxShadow    : "none",
    borderRadius : 0
  },
  media : {
    height : 140
  },
  flexContainer : {
    display        : "flex",
    justifyContent : "space-between",
    minHeight      : 80
  },
  infoscontainer : {
    paddingTop : 30,
    textAlign  : "center"
  },
  bold : {
    fontWeight : "bold"
  }
})

interface DestinationProps {
  destination: Destination
}
interface DestinationInfos{
  label: string
  value: number
  formatOptions?: NumberFormatOptions
}

export const DestinationDetails = ({ destination }: DestinationProps): JSX.Element => {
  const classes: ClassNameMap<any>= useStyles()

  const destinationInfos: DestinationInfos[] = [
    { label: "habitants",  value: destination.habitantNbr,   formatOptions: { notation: "compact", compactDisplay: "short" } },
    { label: "Hôtels",     value: destination.hotelNbr },
    { label: "Revenu Moy", value: destination.averageIncome, formatOptions: { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 0 } },
    { label: "Km²",        value: destination.size }
  ]

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={destination.imgLink}
          src={destination.imgLink}
          component="img"
        />
        <CardContent>
          <div className={classes.flexContainer}>
            <div>
              <Typography variant="subtitle1" className={classes.bold}>{destination.name}</Typography>
              <Typography variant="caption">{destination.address}</Typography>
            </div>
            <Switch checked={destination.activated} disabled={true} />
          </div>
          <Divider />
          <Grid container spacing={1} className={classes.infoscontainer}>
            {destinationInfos.map((destinationInfos: DestinationInfos, index: number) => (
              <Grid item xs={3} key={index}>
                <Typography>
                  <FormattedNumber
                    value={destinationInfos.value}
                    {...destinationInfos.formatOptions}
                  />
                </Typography>
                <Typography variant="caption">{destinationInfos.label}</Typography>
              </Grid>
            ) )}
          </Grid>
        </CardContent>
      </Card>
    </div>
  )
}