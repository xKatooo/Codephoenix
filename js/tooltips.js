  // With the above scripts loaded, you can call `tippy()` with a CSS
      // selector and a `content` prop:
      tippy('#sessionstart', {
      	allowHTML: true,
        content: 'Logueate o Registrate <span class="icon icon-cloud_done green"></span>',
        theme: 'material',
        placement: 'left',
        arrows: 'large',
      });
      tippy('.switch', {
      	allowHTML: true,
        content: 'Elige el tema <span class="icon icon-brightness-contrast green"></span>',
        theme: 'material',
        placement: 'bottom',
        arrows: 'large',
      });