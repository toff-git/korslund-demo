// Demo-skjema: sender ingenting, viser en rolig bekreftelse.
document.querySelectorAll('[data-demo-skjema]').forEach(function (f) {
  f.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var takk = f.parentNode.querySelector('.takk');
    f.hidden = true;
    if (takk) { takk.hidden = false; takk.focus(); }
  });
});
