
export interface Destination {
  name: string
  address: string
  imgLink: string
  habitantNbr: number
  hotelNbr: number
  averageIncome: number
  size: number
  activated: boolean
}

export const initialDestination: Destination = {
  name          : undefined,
  address       : undefined,
  imgLink       : undefined,
  habitantNbr   : undefined,
  hotelNbr      : undefined,
  averageIncome : undefined,
  size          : undefined,
  activated     : false
}