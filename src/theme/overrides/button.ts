import { StyleRules } from "@material-ui/core/styles/withStyles"
import { ButtonClassKey } from "@material-ui/core/Button"

export const button: Partial<StyleRules<ButtonClassKey>> = {
  root : {
    textTransform : "uppercase",
    fontWeight    : "bold"
  },
  containedSecondary : {
    color : "#fff"
  },
  textPrimary : {
    color : "#757575"
  }
}