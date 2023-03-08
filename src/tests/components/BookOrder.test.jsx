import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from '@testing-library/react'
import AppContextProvider from '../../context/appContext'
import { BookOrder } from '../../components/BookOrder'

const mockBookData = {
  id: "1",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "The story of the fabulously wealthy Jay Gatsby...",
  image: "https://example.com/gatsby.jpg",
};

describe("BookOrder", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("renders correctly with AppContextProvider", () => {
    const { getByTestId } = render(
      <AppContextProvider>
        <BookOrder currentBook={mockBookData} />
      </AppContextProvider>
    )

    expect(getByTestId("book-order")).toBeInTheDocument();
  });
})