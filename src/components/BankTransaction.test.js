import { render, screen } from "@testing-library/react";
import BankTransaction from "./BankTransaction";

test("Deve renderizar o mesmo componente com props atualizada", () => {
  const transacao = {
    name: "Depósito",
    value: 100,
  };
  const { rerender } = render(<BankTransaction transaction={transacao} />);
  const tipoTransacao = screen.getByTestId("tipoTransacao");
  const valorTransacao = screen.getByTestId("valorTransacao");

  expect(tipoTransacao).toHaveTextContent("Depósito");
  expect(valorTransacao).toHaveTextContent("R$ 100");

  const novaTransacao = {
    name: "Transferência",
    value: 50,
  };
  rerender(<BankTransaction transaction={novaTransacao} />);
  const novoTipoTransacao = screen.getByTestId("tipoTransacao");
  const novoValorTransacao = screen.getByTestId("valorTransacao");

  expect(novoTipoTransacao).toHaveTextContent("Transferência");
  expect(novoValorTransacao).toHaveTextContent("- R$ 50");
});
