import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from '../actions/types';

const intialState = {
  token:localStorage.getItem('token'),
  isAuthenticated:null,
  loading:true,
  user:null
}