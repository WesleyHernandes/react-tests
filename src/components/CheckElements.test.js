import { render, screen } from "@testing-library/react";
import CheckElements from "./CheckElements";

test("Deve renderizar um link na página", () => {
  render(<CheckElements />);
  const link1 = screen.getByText("Link 01");
  expect(link1).toBeInTheDocument();
});

test("Deve renderizar uma lista de links", () => {
  render(<CheckElements />);
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(4);
});

test("Não deve renderizar o link 05", () => {
  render(<CheckElements />);
  const link5 = screen.queryByText("Link 05");
  expect(link5).not.toBeInTheDocument();
});

test("Deve renderizar uma lista de links com a classe link", () => {
  render(<CheckElements />);
  const links = screen.getAllByRole("link");
  links.forEach((link) => expect(link).toHaveClass("links"));
  expect(links).toMatchSnapshot();
});
