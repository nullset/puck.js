let onState = false;
let handle;
setWatch((e) => {
  onState = !onState;
  if (onState) {
    handle = setInterval(() => {
      LED1.write(true);
      setTimeout(() => {
        LED1.write(false);
      }, 100);
    }, 1900);
  } else {
    clearInterval(handle);
    LED1.write(false);
  }
}, BTN, {edge:"rising", debounce:50, repeat:true});