import $ from 'jquery';
import {welcomeMessage, goodByeMessage} from './scripts2';

import styles from '../styles/main.scss';

$(document).ready(() => {

  $('#render').html (welcomeMessage);
  setTimeout(() => {
    $("#render").html (goodByeMessage);
  }, 1000)
});
