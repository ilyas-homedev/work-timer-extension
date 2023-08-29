import { render, screen } from "@testing-library/react";
import HistoryButton from "./HistoryButton";

describe("HistoryButton", () => {
  const mockOnClick = jest.fn();

  test("renders with 'history' text", () => {
    render(<HistoryButton onClick={mockOnClick} historyIsOpened={false} />);
    const buttonText = screen.getByTestId("button-text");
    expect(buttonText).toHaveTextContent(/history/i);
  });

  test("renders with 'back' text", () => {
    render(<HistoryButton onClick={mockOnClick} historyIsOpened={true} />);
    const buttonText = screen.getByTestId("button-text");
    expect(buttonText).toHaveTextContent(/back/i);
  });
});
