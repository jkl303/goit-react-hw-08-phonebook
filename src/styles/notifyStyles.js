import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  position: 'center-top',
  closeButton: false,
  fontSize: '18px',
  info: {
    background: 'darkcyan',
  },
  failure: {
    background: 'purple',
  },
});
