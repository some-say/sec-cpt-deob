var ak_chlge = function () {
  var _0x5149a4 = _0x1e5b,
      _0x1c6a14,
      _0x50cfb1,
      _0x84b94c,
      _0x34f884,
      _0x3a3d34,
      _0x328579;

  function _0x5432c0(_0x59ff0b, _0xa3815d, _0xf88cbc) {
    var _0x3f4947 = _0x1e5b;

    try {
      var _0x4e936b = _0x86dcfa(_0xa3815d);

      if (_0xf88cbc) _0x1c6a81(_0x59ff0b, _0x4e936b);else {
        if ("blob" == _0x59ff0b.responseType) {
          var _0x2227f8 = new FileReader();

          _0x2227f8.addEventListener("loadend", function () {
            var _0x247f80 = _0x3f4947;

            _0x1c6a81(JSON.parse(_0x2227f8.result), _0x4e936b);
          })

          _0x2227f8.readAsText(_0x59ff0b.response)
        } else if ("json" == _0x59ff0b.responseType) {
          _0x1c6a81(_0x59ff0b.response, _0x4e936b);
        } else {
          _0x1c6a81(JSON.parse(_0x59ff0b.responseText), _0x4e936b);
        }
      }
    } catch (_0x239ba4) {}
  }

  function _0x1c6a81(_0x344ddc, _0x55a4e9) {
    var _0x529297 = _0x1e5b;

    if (_0x344ddc.hasOwnProperty("sec-cp-challenge") && "true" == _0x344ddc["sec-cp-challenge"]) {
      for (var _0x440cba = document.getElementById("sec-container"); _0x440cba.firstChild;) _0x440cba.removeChild(_0x440cba.firstChild);

      var _0x10407a = document.createElement("div"),
          _0x37e482 = document.createElement('iframe');

      _0x10407a.setAttribute('id', "sec-if-container")

      _0x37e482.setAttribute('id', "sec-cpt-if")

      _0x37e482.setAttribute("frameBorder", '0')

      _0x37e482.setAttribute("scrolling", 'no')

      _0x37e482.setAttribute('class', _0x344ddc.provider)

      _0x37e482.setAttribute('data-hostname', _0x55a4e9)

      if (_0x344ddc.hasOwnProperty("branding_type") && "custom_branding" === _0x344ddc.branding_type) {
        var _0x448c3c = decodeURIComponent(_0x344ddc.branding_cust_url);

        _0x448c3c = _0x86dcfa(_0x448c3c) ? _0x448c3c : _0x55a4e9 + _0x448c3c

        _0x37e482.setAttribute('class', 'custom-branding')

        if (_0x344ddc.hasOwnProperty("provider") && "crypto" === _0x344ddc.provider) {
          var _0x2adb39 = _0x504cb0(_0x55a4e9) ? "?duration=" + _0x344ddc.chlg_duration : '';

          _0x37e482.setAttribute("src", _0x448c3c + _0x2adb39)

          _0x37e482.setAttribute("data-duration", _0x344ddc.chlg_duration)

          sessionStorage && sessionStorage.setItem("data-duration", _0x344ddc.chlg_duration)
        } else {
          _0x37e482.setAttribute("src", _0x448c3c)

          _0x37e482.setAttribute("data-key", _0x344ddc.provider_secret_public)
        }

        _0x440cba.appendChild(_0x37e482);
      } else {
        var _0x4a1602 = document.createElement("div"),
            _0x2cb076 = document.createElement("iframe");

        _0x4a1602.setAttribute('id', "sec-text-container")

        _0x2cb076.setAttribute('id', 'sec-text-if')

        _0x2cb076.setAttribute("class", 'custmsg')

        _0x2cb076.setAttribute('frameBorder', '0')

        _0x2cb076.setAttribute("scrolling", 'yes')

        if (_0x344ddc.hasOwnProperty("provider") && "crypto" == _0x344ddc.provider) {
          _0x2adb39 = _0x504cb0(_0x55a4e9) ? '?duration=' + _0x344ddc.chlg_duration : '';

          var _0x101021 = _0x86dcfa(decodeURIComponent(_0x344ddc.branding_url_content)) ? '' : _0x55a4e9;

          _0x2cb076.setAttribute("src", _0x101021 + decodeURIComponent(_0x344ddc.branding_url_content))

          _0x37e482.setAttribute("data-duration", _0x344ddc.chlg_duration)

          _0x37e482.setAttribute('src', _0x55a4e9 + "/_sec/cp_challenge/ak-challenge-3-8.htm" + _0x2adb39)

          sessionStorage && sessionStorage.setItem('data-duration', _0x344ddc.chlg_duration)
        } else {
          _0x2cb076.setAttribute('src', decodeURIComponent(_0x344ddc.branding_url_content))

          _0x37e482.setAttribute('data-key', _0x344ddc.provider_secret_public)

          _0x37e482.setAttribute('src', "/_sec/cp_challenge/" + _0x344ddc.provider + "-3-8.htm")
        }

        _0x4a1602.appendChild(_0x2cb076)

        _0x10407a.appendChild(_0x37e482)

        _0x440cba.appendChild(_0x4a1602)

        _0x440cba.appendChild(_0x10407a)
      }

      document.getElementById('sec-overlay').style.display = "block";
    }
  }

  function _0x504cb0(_0x147177) {
    var _0x17f1e9 = _0x1e5b,
        _0x9c181b = false;
    return '' !== _0x147177 && (_0x9c181b = _0x147177.split('/')[_0x147177.split('/').length - 0x1] !== window.location.hostname), _0x9c181b;
  }

  function _0x158951(_0xe34fae, _0x53285b) {
    var _0x39f8b4 = _0x1e5b,
        _0x4910cf,
        _0x846713 = document.getElementById("sec-cpt-if"),
        _0x1ef5cf = (_0x846713.getAttribute("data-hostname") ? _0x846713.getAttribute("data-hostname") : '') + "/_sec/cp_challenge/verify";

    (_0x4910cf = new XMLHttpRequest()).onreadystatechange = function () {
      var _0x1e3dba = _0x39f8b4;

      if (0x4 == this.readyState && 0xc8 == this.status) {
        try {
          var _0x144dc1 = JSON.parse(_0x4910cf.responseText);
        } catch (_0x17e24a) {
          _0x144dc1 = {};
        }

        _0x144dc1.hasOwnProperty("success") && ("true" == _0x144dc1.success ? document.getElementById('sec-overlay').style.display = "none" : _0x53285b || (msg = {
          'captcha_reset': 'true'
        }, _0x846713.contentWindow.postMessage(JSON.stringify(msg), '*')));
      }
    }

    _0x53285b ? _0x4910cf.open('GET', _0x1ef5cf, true) : _0x4910cf.open("GET", _0x1ef5cf + '?cpt-token=' + _0xe34fae, true)
    _0x4910cf.withCredentials = true

    _0x4910cf.send()
  }

  function _0x86dcfa(_0x4e592a) {
    var _0x23a620 = _0x1e5b;
    if (!_0x4e592a || -0x1 === _0x4e592a.indexOf('//')) return '';

    var _0xc5230a = _0x4e592a.indexOf('/', _0x4e592a.indexOf('//') + 0x2);

    if (_0xc5230a > -0x1) {
      return _0x4e592a.substring(0x0, _0xc5230a);
    } else {
      return _0x4e592a;
    }
  }

  return _0x1c6a14 = XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.open = function () {
    var _0xac5529 = _0x5149a4,
        _0x4e122a;

    url = arguments[0x1]
    this.addEventListener("readystatechange", (_0x4e122a = url, function () {
      var _0x2b10bd = _0xac5529;
      0x4 == this.readyState && 0x1ac == this.status && _0x5432c0(this, _0x4e122a);
    }), false)

    _0x1c6a14.apply(this, arguments)
  }, _0x50cfb1 = window, "function" == typeof (_0x84b94c = window.fetch) && (_0x50cfb1.fetch = function () {
    var _0xfae5e5 = _0x5149a4;

    for (var _0x29c2ac = arguments.length, _0x4ba4dd = new Array(_0x29c2ac), _0x287583 = 0x0; _0x287583 < _0x29c2ac; _0x287583++) _0x4ba4dd[_0x287583] = arguments[_0x287583];

    return function (_0x32ecca) {
      var _0x2a0370 = _0xfae5e5;

      try {
        var _0x284948 = _0x32ecca[0x0] instanceof Request ? _0x32ecca[0x0].url : _0x32ecca[0x0];

        return _0x84b94c.apply(null, _0x32ecca).then((_0x4d6bf9 = _0x284948, function (_0x5ea60f) {
          var _0x56d584 = _0x2a0370;
          return _0x5ea60f.ok || 0x1ac !== _0x5ea60f.status || _0x5ea60f.clone().json().then(function (_0xde3937) {
            _0x5432c0(_0xde3937, _0x4d6bf9, true);
          }), _0x5ea60f;
        }));
      } catch (_0x9d89e6) {}

      var _0x4d6bf9;
    }(_0x4ba4dd);
  }), _0x34f884 = window, _0x3a3d34 = "message", _0x328579 = function (_0x4450e0) {
    var _0x1dbe04 = _0x5149a4,
        _0xefb0d3 = {};

    try {
      _0xefb0d3 = JSON.parse(_0x4450e0.data);
    } catch (_0x30d83f) {
      _0xefb0d3 = {};
    }

    if (_0xefb0d3.hasOwnProperty("captcha_response")) {
      _0x158951(_0xefb0d3.captcha_response);
    } else {
      _0xefb0d3.hasOwnProperty("state_response") && _0x158951(_0xefb0d3.state_response, true);
    }
  }, _0x34f884.addEventListener ? _0x34f884.addEventListener(_0x3a3d34, _0x328579, false) : _0x34f884.attachEvent && _0x34f884.attachEvent('on' + _0x3a3d34, _0x328579), {
    'showChallenge': function (_0x10738d, _0x387b82) {
      var _0x44e763 = _0x5149a4;
      "object" == typeof _0x10738d && _0x10738d.provider && _0x5432c0(_0x10738d, _0x387b82, true);
    }
  };
}();