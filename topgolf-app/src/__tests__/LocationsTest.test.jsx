import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import App from '../App'


describe("App", () => {
  // beforeEach(() => {
  //   fetchMock.resetMocks()
  // })

  test("Successfully retrieves data from API", async () => {
    render(<App/>)
    const elements = await screen.findAllByText(/allen/i)
    expect(elements[0]).toBeInTheDocument()
  })
  
  test("Select element successfully responds to user interaction", async ()=> {
    render(<App/>)
    userEvent.selectOptions(await screen.findByLabelText(/select an option/i), "Allen")
    expect(await screen.findByText(/virtual/i)).toBeInTheDocument()
  })
})