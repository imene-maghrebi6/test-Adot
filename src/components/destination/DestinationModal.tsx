import React from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogTitle from "@material-ui/core/DialogTitle"
import { Destination } from "../../models"
import { DestinationForm } from "./DestinationForm"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { makeStyles } from "@material-ui/styles"

const useStyles: () => ClassNameMap<any> = makeStyles({
  title : {
    "& > *" : {
      fontWeight : "bold"
    }
  }
})

interface ModalProps {
  open: boolean
  onClose: (value: boolean) => void
  callback: (values: Destination) => void
}

export const DestinationModal = ({ open, onClose, callback }: ModalProps): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()

  const handleClose = () => {
    onClose(false)
  }

  const handleConfirm = (values: Destination) => {
    callback(values)
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle classes={{ root: classes.title }}>Ajouter une nouvelle destination</DialogTitle>
        <DialogContent>
          <DestinationForm onSubmit={handleConfirm} onClose={handleClose}></DestinationForm>
        </DialogContent>
      </Dialog>
    </div>
  )
}
