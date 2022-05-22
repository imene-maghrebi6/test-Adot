import { StyleRules } from "@material-ui/core/styles/withStyles"
import { SwitchClassKey } from "@material-ui/core"

export const switchInput: Partial<StyleRules<SwitchClassKey>> = {
  switchBase : {
    "&$checked" : {
      color : "#52d869 !important"
    },
    "&$checked + $track" : {
      backgroundColor : "#52d869 !important"
    }
  }
}