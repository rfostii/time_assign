import axios from 'axios';
import get from 'lodash/get';
import { URL, LOGIN, SIGNUP, REFRESH } from 'config/Api';

export class InvalidCredentialsException {
    constructor(message) {
        this.message = message;
        this.name = 'InvalidCredentialsException';
    }    
}

export function login(email, password) {
  return axios
    .post(URL + LOGIN, {
        email,
        password
    })
    .catch((error) => {
      // raise different exception if due to invalid credentials
      if (get(error, 'response.status') === 400) {
          throw new InvalidCredentialsException(error);
      }
      throw error;
    });
};

export function createUser(email, password) {
    return axios
      .post(URL + SIGNUP, {
        email, 
        password
      })
      .catch((error) => {
        // raise different exception if due to invalid credentials
        if (get(error, 'response.status') === 400) {
            throw new InvalidCredentialsException(error);
        }
        throw error;
      });
  };

  export function refresh() {
    return axios
      .post(URL + REFRESH)
      .catch((error) => {
        // raise different exception if due to invalid credentials
        if (get(error, 'response.status') === 400) {
            throw new InvalidCredentialsException(error);
        }
        throw error;
      });
  };