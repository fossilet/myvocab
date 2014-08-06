// Generated by CoffeeScript 1.7.1

/*
Add more links to vocabuary.com word page.
Created by tux, Sat Feb  8 23:48:59 CST 2014
 */

(function() {
  var DEBUG, DOMModificationHandler, container, extra_sites, mangle, sites;

  DEBUG = true;

  DEBUG = false;

  container = "div.wordPage";

  sites = [
    {
      'name': 'Dictionary.com',
      'link': 'http://dictionary.reference.com/browse/',
      'class': 'dictionarycom'
    }, {
      'name': 'Youdao',
      'link': 'http://dict.youdao.com/search?q=',
      'class': 'youdao'
    }, {
      'name': 'Etymology',
      'link': 'http://etymonline.com/index.php?search=',
      'class': 'etymology'
    }
  ];

  extra_sites = [
    {
      'name': 'Google Images',
      'link': 'https://www.google.com/search?tbm=isch&q=',
      'class': 'googleimages'
    }, {
      'name': 'Merriam-Webster',
      'link': 'http://www.merriam-webster.com/dictionary/',
      'class': 'mw'
    }, {
      'name': 'The Free Dictionary',
      'link': 'http://www.thefreedictionary.com/',
      'class': 'tfd'
    }, {
      'name': 'Google Define',
      'link': 'https://www.google.com/search?q=define%3A+',
      'class': 'googledefine'
    }
  ];

  mangle = function() {
    var bgimage, extra_links, link, links, menu, mydiv, mydiv_content, site, site_tools, word, _i, _j, _len, _len1, _results;
    word = $.trim($("" + container + " h1").text());
    site_tools = "" + container + " div.tools";
    mydiv_content = '<div class="ext-link"></div>';
    mydiv = "" + container + " div.ext-link";
    ($(mydiv)).remove();
    bgimage = "url('chrome-extension://__MSG_@@extension_id__/etymonline.png')";
    links = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = sites.length; _i < _len; _i++) {
        site = sites[_i];
        _results.push("<a target='_blank' class='ext-link tbutton " + site["class"] + "' href='" + site["link"] + word + "'>" + site["name"] + " style='background-image: " + bgimage + "' </a>");
      }
      return _results;
    })();
    extra_links = (function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = extra_sites.length; _i < _len; _i++) {
        site = extra_sites[_i];
        _results.push("<li class='submenu'> <a target='_blank' class='ext-link tbutton " + site["class"] + "' href='" + site["link"] + word + "'>" + site["name"] + " </a> </li>");
      }
      return _results;
    })();
    if (DEBUG) {
      console.log("word: " + word);
      console.log(links);
    }
    ($(site_tools)).after(mydiv_content);
    for (_i = 0, _len = links.length; _i < _len; _i++) {
      link = links[_i];
      ($(mydiv)).append(link);
    }
    menu = "<ul class=\"menu\">\n  <li class=\"menu\">\n    More\n    <ul class=\"submenu\">\n    </ul>\n  </li>\n</ul>";
    ($(mydiv)).append(menu);
    _results = [];
    for (_j = 0, _len1 = extra_links.length; _j < _len1; _j++) {
      link = extra_links[_j];
      _results.push($("" + mydiv + " ul li ul").append(link));
    }
    return _results;
  };

  DOMModificationHandler = function() {
    $(this).unbind("DOMSubtreeModified");
    return setTimeout((function() {
      mangle();
      return $(container).bind("DOMSubtreeModified", DOMModificationHandler);
    }), 4000);
  };

  $(container).bind("DOMSubtreeModified", DOMModificationHandler);

  $(document).click(mangle);

}).call(this);

//# sourceMappingURL=functions.map
