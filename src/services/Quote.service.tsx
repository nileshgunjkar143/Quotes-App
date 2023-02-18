import axios, {CancelTokenSource} from 'axios';

// const api = process.env.REACT_APP_BASE_URL;

const quotesApi = axios.create({
  baseURL: 'http://192.168.43.65:3000',
});

// ------------------------------------------- Get API's -------------------------------------------------//
export const GET = async (apiURL: string, params: any, headers: any) => {
  const getResponse = await quotesApi
    .get(apiURL, {params, headers})
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });
  return getResponse;
};

//Get Quotes By Author
let cancelToken: CancelTokenSource;
export async function getQuotesByAuthor(authorName: any) {
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  //Save the cancel token for the current request
  cancelToken = axios.CancelToken.source();

  const response = await quotesApi.get(`/quote/search?author=${authorName}`, {
    cancelToken: cancelToken.token,
  });
  return response.data;
}

// ------------------------------------------- Post API's -------------------------------------------------//
export const POST = async (apiURL: string, data: any) => {
  const getResponse = await quotesApi
    .post(apiURL,data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });
  return getResponse;
};

// ------------------------------------------- Patch API's -------------------------------------------------//
export const PATCH = async (apiURL: string, data: any) => {
  const getResponse = await quotesApi
    .patch(apiURL,data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });
  return getResponse;
};

// ------------------------------------------- Delete API's -------------------------------------------------//
export const DELETE = async (apiURL: string) => {
  const getResponse = await quotesApi
    .delete(apiURL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      return error.response;
    });
  return getResponse;
};

