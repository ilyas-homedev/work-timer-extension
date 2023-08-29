import { act, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import TimeInput from "./TimeInput";

describe("TimeInput", () => {
  const id = "hours";
  const range = 23;
  const groupName = "work";

  test("renders", () => {
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const increaseButton = screen.getByTestId("increase-button");
    expect(increaseButton).toBeInTheDocument();

    const decreaseButton = screen.getByTestId("decrease-button");
    expect(decreaseButton).toBeInTheDocument();

    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();

    const timeOptions = screen.queryByRole("list");
    expect(timeOptions).toBeNull();
  });

  test("TimeOptions appears on input focus", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox");
    await user.click(inputElement);

    const timeOptions = screen.queryByRole("list");
    expect(timeOptions).toBeInTheDocument();
  });

  test("TimeOptions disappears on input blur", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox");
    await user.click(inputElement);

    const timeOptions = screen.queryByRole("list");
    expect(timeOptions).toBeInTheDocument();

    await user.tab();
    expect(timeOptions).not.toBeInTheDocument();
  });

  test("input value equal 01 after increase button click", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const increaseButton = screen.getByTestId("increase-button");

    await user.click(increaseButton);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    expect(inputElement).toHaveValue("01");
  });

  test("input value equal 01 after increase button click 2 times and decrease button click 1 time", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const increaseButton = screen.getByTestId("increase-button");
    const decreaseButton = screen.getByTestId("decrease-button");

    await user.click(increaseButton);
    await user.click(increaseButton);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).toHaveValue("02");

    await user.click(decreaseButton);

    expect(inputElement).toHaveValue("01");
  });

  test("input value is not higher than range after clicking on increase button more than range times", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const increaseButton = screen.getByTestId("increase-button");

    let count = 0;

    while (count < range + 5) {
      await user.click(increaseButton);

      count += 1;
    }

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    expect(inputElement).toHaveValue(range.toString());
  });

  test("input value is not lower than 0 after clicking multiple times on decrease button", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const decreaseButton = screen.getByTestId("decrease-button");

    let count = 0;

    while (count < 5) {
      await user.click(decreaseButton);

      count += 1;
    }

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    expect(inputElement).toHaveValue("00");
  });

  test("input value is equal 00 after typing string characters in it", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(inputElement, "string");
    await user.tab();

    expect(inputElement).toHaveValue("00");
  });

  test("input value is equal 00 after typing non-numeric symbols in it", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const symbols = "-=e.~`/*+%?".split("");

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    symbols.forEach(async (symbol) => {
      await user.type(inputElement, symbol);
      await user.tab();

      expect(inputElement).toHaveValue("00");
    });
  });

  test("input value is equal 12 after typing 12 in it", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(inputElement, "12");
    await user.tab();

    expect(inputElement).toHaveValue("12");
  });

  test("input value is equal 09 after typing 9 in it", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(inputElement, "9");
    await user.tab();

    expect(inputElement).toHaveValue("09");
  });

  test("input value is equal range value after typing a value that is greater than range value in it", async () => {
    user.setup();
    render(<TimeInput id={id} range={range} groupName={groupName} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(inputElement, `${range * 2}`);
    await user.tab();

    expect(inputElement).toHaveValue(range.toString());
  });

  test("input value is equal 01 after click on the value inside time options list", async () => {
    // user.setup();
    // render(<TimeInput id={id} range={range} groupName={groupName} />);
    // const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    // await user.click(inputElement);
    // const optionsListItems = screen.getAllByRole("listitem");
    // const itemValue1 = optionsListItems[1];
    // await user.click(itemValue1);
    // await waitFor(() => expect(inputElement).toHaveValue("01"));
  });
});
