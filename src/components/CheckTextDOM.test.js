import { screen, render } from "@testing-library/react";
import CheckTextDOM from "./CheckTextDOM";

test("Teste para verificar se texto está sendo exibido na tela", () => {
  render(<CheckTextDOM />);
  const text = screen.getByText("Hello World!");
  expect(text).toBeInTheDocument();
});
