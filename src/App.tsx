import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Destinations }  from "./pages"
import { DestinationProvider } from "./context"
import { IntlProvider } from "react-intl"
import { ThemeProvider } from "@material-ui/core/styles"
import { appTheme } from "./theme"

function App() {

  return (
    <IntlProvider locale="FR">
      <ThemeProvider theme={appTheme}>
        <DestinationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Destinations />} />
            </Routes>
          </BrowserRouter>
        </DestinationProvider>
      </ThemeProvider>
    </IntlProvider>
  )
}

export default App