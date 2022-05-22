import { Overrides } from "@material-ui/core/styles/overrides"
import { button } from "./button"
import { switchInput } from "./switch"

export const overrides: Overrides = {
  MuiButton : button,
  MuiSwitch : switchInput
}