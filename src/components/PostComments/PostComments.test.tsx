import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar 2 comentários", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("textArea-comment"), {
      target: {
        value: "Comentário de teste",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));

    fireEvent.change(screen.getByTestId("textArea-comment"), {
      target: {
        value: "Segundo comentário de teste",
      },
    });
    fireEvent.click(screen.getByTestId("btn-comment"));
  });
});
