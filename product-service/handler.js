export const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      productName: 'Book',
      price: 123
    })
  };
};

