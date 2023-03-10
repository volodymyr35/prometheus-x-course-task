import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import AppContextProvider, {
  mockAppContextValue,
} from "../../context/appContext";
import { BookOrder, calculateTotalPrice } from "../../components/BookOrder";

const mockBookData = {
  id: "1",
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  description: "The story of the fabulously wealthy Jay Gatsby...",
  image: "https://example.com/gatsby.jpg",
  price: 10.99,
};

jest.mock("../../context/appContext");

describe("BookOrder", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it("renders correctly with AppContextProvider", () => {
    render(<BookOrder currentBook={mockBookData} />, {
      wrapper: AppContextProvider,
    });

    expect(screen.getByTestId("book-order")).toBeInTheDocument();
  });

  it("increases the quantity by one", () => {
    render(<BookOrder currentBook={mockBookData} />, {
      wrapper: AppContextProvider,
    });

    const quantityInput = screen.getByRole("spinbutton");
    const initialQuantity = Number(quantityInput.value);

    fireEvent.change(quantityInput, { target: { value: initialQuantity + 1 } });

    const updatedQuantity = Number(quantityInput.value);

    expect(updatedQuantity).toEqual(initialQuantity + 1);
    expect(screen.getByTestId("total-price")).toHaveTextContent("$21.98");
  });

  it("handleQuantityChange sets the quantity state correctly", () => {
    render(<BookOrder currentBook={mockBookData} />, {
      wrapper: AppContextProvider,
    });

    const quantityInput = screen.getByRole('spinbutton');

    // Change the quantity input to 5
    fireEvent.change(quantityInput, { target: { value: 5 } });
    expect(quantityInput.value).toBe('5');
    
    // Change the quantity input to a value below the minimum
    fireEvent.change(quantityInput, { target: { value: -1 } });
    expect(quantityInput.value).toBe('1');
  
    // Change the quantity input to a value above the maximum
    fireEvent.change(quantityInput, { target: { value: 50 } });
    expect(quantityInput.value).toBe('42');
  });

  it("addToCart with the book data when the Add to Cart button is clicked", () => {
    render(<BookOrder currentBook={mockBookData} />, {
      wrapper: AppContextProvider,
    });

    const quantityInput = screen.getByRole("spinbutton");
    const addToCartButton = screen.getByTestId("add-to-cart");

    fireEvent.change(quantityInput, { target: { value: 2 } });
    fireEvent.click(addToCartButton);

    expect(mockAppContextValue.addToCart).toHaveBeenCalledTimes(1);
    expect(mockAppContextValue.addToCart).toHaveBeenCalledWith({
      id: mockBookData.id,
      quantity: 2,
      bookPrice: mockBookData.price,
      bookName: mockBookData.title,
    });
  });
});

describe("calculateTotalPrice", () => {
  let alertSpy;

  beforeEach(() => {
    alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns the total price as a formatted string", () => {
    const quantity = 5;
    const bookPrice = 10.99;
    const expected = "$54.95";

    expect(calculateTotalPrice(quantity, bookPrice)).toEqual(expected);
  });

  it("handles invalid quantity values", () => {
    const invalidQuantities = [0, -5];
    invalidQuantities.forEach((quantity) => {
      const bookPrice = 10.99;
      const expected = "$10.99";

      expect(calculateTotalPrice(quantity, bookPrice)).toEqual(expected);
      expect(alertSpy).toHaveBeenCalledWith("You entered an invalid quantity!");
    });
  });

  it("handles quantities over the maximum value", () => {
    const quantity = 50;
    const bookPrice = 10.99;
    const expected = "$461.58";

    expect(calculateTotalPrice(quantity, bookPrice)).toEqual(expected);
    expect(alertSpy).toHaveBeenCalledWith(
      "You can`t order more than 42 items!"
    );
  });
});
