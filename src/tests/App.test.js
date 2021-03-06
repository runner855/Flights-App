import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders app title", () => {
  render(<App />);
  const appTitle = screen.getByText(/Flights App/i);
  expect(appTitle).toBeInTheDocument();
});
