import modal from './modalSendComment/slices';
import theme from './themes/slices';
import lang from './languages/slices';
import contrast from './contrast/slices';

export default {
  modal: modal.reducer,
  theme: theme.reducer,
  lang: lang.reducer,
  contrast: contrast.reducer
};
