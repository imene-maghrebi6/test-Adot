import React, { ReactNode } from "react"
import { ClassNameMap } from "@material-ui/core/styles/withStyles"
import { Container } from "@material-ui/core"
import { Theme, makeStyles } from "@material-ui/core/styles"
import classNames from "classnames"

const useStyles: () => ClassNameMap<any> = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor : theme.palette.grey[200]
  },
  container : {
    maxWidth                       : 1200,
    margin                         : theme.spacing(0, "auto"),
    padding                        : theme.spacing(10, 0),
    opacity                        : 1,
    [theme.breakpoints.down("sm")] : {
      padding : theme.spacing(4, 1)
    }
  }
}))

interface Props {
  className?: string
  children: ReactNode
}

export const Page = ({ children, className }: Props): JSX.Element => {
  const classes: ClassNameMap<any> = useStyles()
  return (
    <div className={classes.root}>
      <Container className={classNames(classes.container, className)}>
        {children}
      </Container>
    </div>
  )
}