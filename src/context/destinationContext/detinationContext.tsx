import React, { PropsWithChildren, useState, Dispatch, SetStateAction } from "react"
import { Destination } from "../../models"
import { initialDestinations } from "./utils"
import { ReactState } from "../../utils"

export interface DestinationContextType {
  destinations: Destination[]
  setDestinations: Dispatch<SetStateAction<Destination[]>>
}

export const DestinationContext: React.Context<DestinationContextType>= React.createContext({} as DestinationContextType)

interface DestinationProviderProps extends PropsWithChildren<{}> {
}

export const DestinationProvider = ({ children }: DestinationProviderProps): JSX.Element => {
  const [ destinations, setDestinations ]: ReactState<Destination[]> = useState(initialDestinations)

  return (
    <DestinationContext.Provider value={{ destinations, setDestinations }}>
      {children}
    </DestinationContext.Provider>
  )
}