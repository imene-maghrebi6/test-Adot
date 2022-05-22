import React from 'react'
import { render, fireEvent, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import App from "../App"

describe('destination tests', () => {
  it("Modal opening", () => {
    render(<App/>)
    fireEvent.click(screen.getByText('ajouter'))
    expect(screen.getByRole("dialog")).toBeInTheDocument()
  })
})
