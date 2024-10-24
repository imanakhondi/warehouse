const messages = {
  required: {
    title: "Title is required",
    quantity: "Quantity is required",
    price: "Price is required",
    category: "Category is required 1245",
  },
  min: {
    title: "Title must be at least 3 characters long",
  },
  max: {
    title: {
      title: "Title cannot be more than 50 characters long",
      description: "Description cannot be more than 500 characters long",
    },
  },
  positive: {
    quantity: "Quantity must be a positive number",
    price: "Price must be a positive number",
  },
  integer: {
    quantity: "Quantity must be an integer",
  },
};

export default messages;