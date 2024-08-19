import {create} from 'apisauce';
import {BASE_URL, REQUEST_TYPE} from '../config/WebService';
import {store} from '../store';
import NavigationService from './NavigationService';
import Toast from 'react-native-toast-message';
import {access_token} from '../ducks/auth/reducer';

const api = create({
  baseURL: BASE_URL,
  timeout: 30000,
});

// api call
export async function callRequest(
  url,
  payload,
  headers = {},
  parameter = '',
  params = {},
) {
  const {type, access_token_required} = url;
  const route =
    parameter && parameter !== '' ? url.route + '/' + parameter : url.route;

  console.log('route--->', route);

  if (access_token_required) {
    const token = `Bearer ${access_token(store)}`;
    headers.Authorization = token;
  }
  // headers.Authorization = '42|W3hpHwxdYXSgOVRDsi7AD8Wg4pEKHebBey0AWpzH';
  // init header object
  const headerObject = {
    headers,
  };

  console.log('headerobject===>', headerObject);
  // init responseoc
  let response;
  switch (type) {
    case REQUEST_TYPE.POST:
      response = await api.post(route, payload, headerObject);
      break;
    case REQUEST_TYPE.GET:
      response = await api.get(route, params, headerObject);
      break;
  }
  console.log('response===>', response);
  return handleResponse(response);
}

export const handleResponse = response => {
  return new Promise((resolve, reject) => {
    const isNetworkError = response.problem === 'NETWORK_ERROR';
    const isClientError = response.problem === 'CLIENT_ERROR';
    const isErr = response.data == null;
    const isResponseValid = response.ok && response?.status == 200;
    const isKickUser =
      response?.status == 400 && response?.data?.msg === 'User not found.';
    if (isResponseValid) {
      resolve(response.data);
    } else if (isKickUser) {
      store.dispatch(authActions.successLogout());
      Toast.show({
        type: 'error',
        text1: `Session expired, Please re-login again.`,
      });
      setTimeout(() => {
        NavigationService.reset({
          index: 0,
          routes: [{name: 'AuthStack'}],
        });
      }, 500);
    } else if (isNetworkError) {
      Toast.show({
        type: 'error',
        text1: `Internet is not available.`,
      });
      reject({
        message: 'api_network_error',
        statusCode: response.code,
      });
    } else if (isClientError) {
      reject({
        message: 'api_Client_error.',
        msg: response,
      });
    } else if (isErr) {
      reject({
        message: 'Invalid Email or Password.',
        statusCode: response.code,
      });
    } else {
      reject({
        message: 'null',
      });
    }
  });
};
