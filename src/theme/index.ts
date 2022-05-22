import { createTheme } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core/styles/createTheme"
import { palette } from "./palette"
import { overrides } from "./overrides"

export const appTheme: Theme = createTheme({
  overrides : overrides,
  palette   : palette
})
