import { CHECK_AUTH, PUSH_IN_USERBASKET, TAKE_BASKET_FROM_DB } from '../types/user';
import { CONFIG_STATUS } from '../types/status';
import { addLoader, removeLoader } from '../actionCreators/loader';
import { writeWrongData } from './error';

const registrationUser = (username, email, password) => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ username, email, password }),
  });
  if (response.status !== 200) {
    dispatch(writeWrongData(true));
  } else {
    const user = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', user._id);
    window.localStorage.setItem('name', user.username)
  }
  setTimeout(() => {
    dispatch(removeLoader());
  }, 1000)
}

const loginUser = (email, password) => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
  if (response.status !== 200) {
    dispatch(writeWrongData(true));
  } else {
    const user = await response.json();
    dispatch(checkAuth(true));
    window.localStorage.setItem('userID', user._id);
    window.localStorage.setItem('name', user.username)
  }
  setTimeout(() => {
    dispatch(removeLoader());
  }, 1000)
};

const logoutUser = () => async (dispatch, getState) => {
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/logout', {
    credentials: 'include',
  });
  console.log(response.status)
  if (response.status === 200) {
    dispatch(checkAuth(false));
    dispatch(removeLoader());
  }
};

const checkAuth = (flag) => {
  return {
    type: CHECK_AUTH,
    payload: flag,
  }
}

const saveConfig = (config) => async (dispatch, getState) => {
  const id = window.localStorage.getItem('userID')
  dispatch(addLoader());
  const response = await fetch('http://localhost:3001/user/config', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ config, id }),
  })


  if (response.status === 200) {
    const savedConfig = await response.json();
    dispatch(pushInUserBasket(savedConfig.basket))
  }

  dispatch(removeLoader());
};

const pushInUserBasket = (config) => {
  return {
    type: PUSH_IN_USERBASKET,
    payload: config,
  }
};

const loadBasket = (id) => async (dispatch, usestate) => {
  const response = await fetch('http://localhost:3001/user/basket', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });

  if (response.status === 200) {
    const basket = await response.json();
    dispatch(takeBasketFromDb(basket));
  }
};

const takeBasketFromDb = (basket) => {
  return {
    type: TAKE_BASKET_FROM_DB,
    payload: basket,
  }
};

const deleteItemFromBasketInDb = (path) => async (dispatch, getState) => {
  dispatch(addLoader());
  const userID = window.localStorage.getItem('userID');
  await fetch(`http://localhost:3001/user/basket`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ path, userID })
  });
  dispatch(removeLoader());
};

const changeConfigStatus = () => {
  return {
    type: CONFIG_STATUS,
  }
};

export {
  registrationUser,
  loginUser,
  logoutUser,
  checkAuth,
  saveConfig,
  loadBasket,
  deleteItemFromBasketInDb,
  changeConfigStatus,
}
