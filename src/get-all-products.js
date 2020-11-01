import productList from './productList.json';

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Origin': '*',
};

export const getAllProducts = async (event) => {
  return {
    statusCode: 200,
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(productList),
  };
};
