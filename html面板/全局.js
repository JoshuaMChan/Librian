// Generated by CoffeeScript 2.3.2
(function() {
  window.link_on = true;

  new QWebChannel(qt.webChannelTransport, function(channel) {
    window.handler = channel.objects.handler;
    return window.send = function(s1, s2) {
      if (window.link_on) {
        window.link_on = false;
        if (!s2) {
          return window.handler.rec1(s1);
        } else {
          return window.handler.rec2(s1, s2);
        }
      }
    };
  });

  $(function() {
    try {
      return send('初始化');
    } catch (error) {
      return setTimeout(初始化, 35);
    }
  });

}).call(this);
