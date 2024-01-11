import { render, screen } from "@testing-library/react";
import CheckInput from "./CheckInput";
import userEvent from "@testing-library/user-event";

describe("Deve renderizar um input", () => {
  test("No DOM", () => {
    render(<CheckInput />);
    const input = screen.getByPlaceholderText("Digite um valor");
    expect(input).toBeInTheDocument();
  });

  test("Tenha Type = number", () => {
    render(<CheckInput />);
    const input = screen.getByPlaceholderText("Digite um valor");
    expect(input).toHaveAttribute("type", "number");
  });

  test("Pode ser preenchido", () => {
    render(<CheckInput />);
    const input = screen.getByPlaceholderText("Digite um valor");
    userEvent.type(input, "50");
    expect(input).toHaveDisplayValue(50);
  });
});
