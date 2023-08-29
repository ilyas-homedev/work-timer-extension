import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders", () => {
    render(<App />);

    const heading = screen.getByRole("heading", { name: /work timer/i });

    expect(heading).toBeInTheDocument();
  });
});
