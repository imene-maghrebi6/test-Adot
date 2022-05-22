import React, { useContext } from "react"
import { DestinationContext, DestinationContextType } from "../context"
import { Destination } from "../models"
import { DestinationDetails } from "../components"
import { Grid, Button, Typography } from "@material-ui/core"
import { ReactState } from "../utils"
import { DestinationModal, Page } from "../components"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { makeStyles } from "@material-ui/styles"
import { Add } from "@material-ui/icons"

const useStyles: () => ClassNameMap<any> = makeStyles({
  titleContainer : {
    display        : "flex",
    justifyContent : "space-between",
    paddingBottom  : 30
  }
})

const Destinations = () : JSX.Element => {
  const classes: ClassNameMap <any> = useStyles()
  const { destinations, setDestinations }: DestinationContextType = useContext(DestinationContext)
  const [ open, setOpen ]: ReactState<boolean> = React.useState<boolean>(false)

  const closeModal = () => {
    setOpen(false)
  }

  const openModal = () => {
    setOpen(true)
  }

  const registerDestination = (values: Destination) => {
    setDestinations([ ...destinations, values ])
  }

  return (
    <Page>
      <div className={classes.titleContainer}>
        <Typography variant="h5">Destinations</Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={openModal}
          startIcon={<Add />}
        >
          ajouter
        </Button>
      </div>
      <DestinationModal open={open} onClose={closeModal} callback={registerDestination} />
      <Grid container spacing={2}>
        {destinations.map((destination: Destination, index: number) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DestinationDetails destination={destination} />
          </Grid>
        ))}
      </Grid>
    </Page>
  )
}

export default Destinations