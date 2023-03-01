import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithTranslation } from "../../../shared/lib/renderWithTranslation/renderWithTranslation";
import {Sidebar} from "./Sidebar";

describe("Sidebar", () => {

  it("Should be rendered", () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  })

  it("Should have been class \"collapsed\"", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleBtn);

    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  })
  

})