import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderForm from "./OrderForm";

describe("OrderForm", () => {
  it("deve renderizar o formulário de pedido corretamente", () => {
    render(<OrderForm />);

    expect(screen.getByText("Categoria do Bolo")).toBeInTheDocument();
    expect(screen.getByText("Sabor do Recheio")).toBeInTheDocument();
    expect(screen.getByText("Peso do Bolo (Mínimo 1.5kg)")).toBeInTheDocument();
    expect(screen.getByText("Método de Recebimento")).toBeInTheDocument();
    expect(
      screen.getByText("Adicionar embalagem em caixa (+R$ 10,00)"),
    ).toBeInTheDocument();
  });

  it("deve exibir o campo de endereço quando 'Entrega' for selecionado", () => {
    render(<OrderForm />);

    expect(
      screen.queryByPlaceholderText("Rua, Número, Bairro..."),
    ).not.toBeInTheDocument();

    const botaoEntrega = screen.getByText("Entrega");
    fireEvent.click(botaoEntrega);

    expect(
      screen.getByPlaceholderText("Rua, Número, Bairro..."),
    ).toBeInTheDocument();
  });

  it("deve calcular o preço corretamente ao alterar categoria, peso e embalagem", () => {
    render(<OrderForm />);

    // 1. Verifica o preço inicial
    expect(screen.getByText("R$ 75,00")).toBeInTheDocument();

    // 2. Altera a categoria para Massa Chocolate (R$60/kg)
    const selectCategoria = screen.getByLabelText(/Categoria do Bolo/i);
    fireEvent.change(selectCategoria, { target: { value: "massa-chocolate" } });

    // Novo cálculo: R$60 * 1.5kg = R$ 90,00
    expect(screen.getByText("R$ 90,00")).toBeInTheDocument();

    // 3. Altera o peso para 2.5kg
    const inputPeso = screen.getByLabelText(/Peso do Bolo/i);
    fireEvent.change(inputPeso, { target: { value: "2.5" } });

    // Novo cálculo: R$60 * 2.5kg = R$ 150,00
    expect(screen.getByText("R$ 150,00")).toBeInTheDocument();

    // 4. Adiciona a embalagem (+ R$ 10,00)
    const checkboxEmbalagem = screen.getByLabelText(
      /Adicionar embalagem em caixa/i,
    );
    fireEvent.click(checkboxEmbalagem);

    // Cálculo final: R$ 150,00 + R$ 10,00 = R$ 160,00
    expect(screen.getByText("R$ 160,00")).toBeInTheDocument();
  });
});
