import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen } from "@testing-library/react";
import { useFetchOnce } from "../../hooks";
import { SpecificBook } from "../../pages/SpecificBook";

const mockBookData = {
  id: "1",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "The story of the fabulously wealthy Jay Gatsby...",
  image: "https://example.com/gatsby.jpg",
};

jest.mock("../../hooks", () => ({
  useFetchOnce: jest.fn(),
}));

jest.mock("../../components/BookOrder", () => ({
  BookOrder: () => <div data-testid="book-order" />,
}));

describe("<SpecificBook />", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("renders nothing when there is no book data", () => {
    useFetchOnce.mockImplementation(() => ({
      data: null,
      error: null,
      loading: false,
    }));

    render(<SpecificBook />);

    expect(screen.queryByTestId("specific-book")).toBeNull();
  });

  it("renders book data when it is available", async () => {
    useFetchOnce.mockImplementation(() => ({
      data: mockBookData,
      error: null,
      loading: false,
    }));

    render(<SpecificBook bookId={mockBookData.id} />);

    await screen.findByTestId("specific-book");

    expect(screen.getByRole("list")).toHaveTextContent(mockBookData.title);
    expect(screen.getByRole("list")).toHaveTextContent(mockBookData.author);
    expect(screen.getByTestId("book-description")).toHaveTextContent(
      mockBookData.description
    );
    expect(screen.getByAltText("book")).toHaveAttribute(
      "src",
      mockBookData.image
    );
  });

  it("logs errors to the console", () => {
    const mockError = new Error("Failed to fetch book data");
    useFetchOnce.mockImplementation(() => ({
      data: null,
      error: mockError,
      loading: false,
    }));

    const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

    render(<SpecificBook bookId="1" />);

    expect(errorSpy).toHaveBeenCalledWith(mockError);
  });
});
