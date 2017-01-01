window.onload = function() {
  var $menuIcon = document.getElementsByClassName('menu-icon')[0];
  var $offCanva = document.getElementsByClassName('off-canvas')[0];
  var $siteWrap = document.getElementsByClassName('site-wrapper')[0];

  $menuIcon.addEventListener('click', function() {
    toggleClass($menuIcon, 'close');
    toggleClass($offCanva, 'toggled');
    toggleClass($siteWrap, 'open');
  }, false);

  $menuIcon.addEventListener('mouseenter', function() {
    addClass($menuIcon, 'hover');
  });

  $menuIcon.addEventListener('mouseleave', function() {
    removeClass($menuIcon, 'hover');
  });

  function addClass(element, className) {
    element.className += " " + className;
  }

  function removeClass(element, className) {
      // Capture any surrounding space characters to prevent repeated
      // additions and removals from leaving lots of spaces.
    var classNameRegEx = new RegExp("\\s*" + className + "\\s*");
    element.className = element.className.replace(classNameRegEx, " ");
  }

  function toggleClass(element, className) {
    if (!element || !className) {
      return;
    }

    if (element.className.indexOf(className) === -1) {
      addClass(element, className);
    } else {
      removeClass(element, className);
    }
  }

  // Open Twitter/share in a pop-up
  var $popup = document.getElementsByClassName('popup')[0];
  if (!$popup) {
    return;
  }
  $popup.addEventListener('click', function(e) {
    e.preventDefault()
    var width  = 575,
        height = 400,
        left   = (document.documentElement.clientWidth  - width)  / 2,
        top    = (document.documentElement.clientHeight - height) / 2,
        url    = this.href,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left;

    window.open(url, 'twitter', opts);

    return false;
  });

  // Make iframe videos responsive
  // Slightly modified version of a script by Todd Moto

  (function ( window, document, undefined ) {
    var $iframes = Array.from(document.getElementsByTagName('iframe'));
    $iframes.forEach(function(iframe) {
      var players = /www.youtube.com|player.vimeo.com/;

      if (iframe.src.search(players) > 0) {
        var videoRatio        = (iframe.height / iframe.width) * 100;

        iframe.style.position = 'absolute';
        iframe.style.top      = '0';
        iframe.style.left     = '0';
        iframe.width          = '100%';
        iframe.height         = '100%';

        var wrap              =  document.createElement('div');
        wrap.className        = 'fluid-vids';
        wrap.style.width      = '100%';
        wrap.style.position   = 'relative';
        wrap.style.paddingTop = videoRatio + '%';

        var iframeParent      = iframe.parentNode;
        iframeParent.insertBefore(wrap, iframe);
        wrap.appendChild(iframe);
      }
    });
  })(window,document);
}