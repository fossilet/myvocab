// Generated by CoffeeScript 1.10.0

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
      'name': 'Etymonline',
      'link': 'http://etymonline.com/index.php?search=',
      'class': 'etymonline'
    }
  ];

  extra_sites = [
    {
      'name': 'Google Images',
      'link': 'https://www.google.com/search?tbm=isch&q=',
      'class': 'google'
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
      'class': 'google'
    }
  ];

  mangle = function() {
    var bgimage, extra_links, i, j, k, klass, l, len, len1, len2, len3, link, links, menu, mydiv, mydiv_content, offset, results, site, site_tools, word;
    word = $.trim($(container + " h1").text());
    site_tools = container + " div.tools";
    mydiv_content = '<div class="ext-link"></div>';
    mydiv = container + " div.ext-link";
    ($(mydiv)).remove();
    links = [];
    for (i = 0, len = sites.length; i < len; i++) {
      site = sites[i];
      bgimage = "url(&#39;" + chrome.extension.getURL(("img/" + site['class'] + ".png") + "&#39;)");
      links.push("<a target='_blank' class='ext-link tbutton " + site["class"] + "' style='background-image: " + bgimage + "' href='" + site["link"] + word + "'>" + site["name"] + "</a>");
    }
    extra_links = [];
    for (j = 0, len1 = extra_sites.length; j < len1; j++) {
      site = extra_sites[j];
      bgimage = "url(&#39;" + chrome.extension.getURL(("img/" + site['class'] + ".png") + "&#39;)");
      extra_links.push("<li class='submenu'> <a target='_blank' class='ext-link tbutton " + site["class"] + "' style='background-image: " + bgimage + "' href='" + site["link"] + word + "'>" + site["name"] + "</a></li>");
    }
    if (DEBUG) {
      console.log("word: " + word);
      console.log(links);
    }
    ($(site_tools)).after(mydiv_content);
    for (k = 0, len2 = links.length; k < len2; k++) {
      link = links[k];
      ($(mydiv)).append(link);
    }
    klass = "i.progress.icon.med";
    offset = ($(klass)).attr("data-prg");
    ($(klass)).css({
      'background-position-x': offset + '%'
    });
    menu = "<ul class=\"menu\">\n  <li class=\"menu\">\n    More\n    <ul class=\"submenu\">\n    </ul>\n  </li>\n</ul>";
    ($('body.with-tab-challenge div.wordPage.with-header-margin')).css({
      'margin-top': '0px'
    });
    ($('#dictionaryContent h1.dynamictext')).css({
      'margin-top': '0px'
    });
    ($(mydiv)).append(menu);
    results = [];
    for (l = 0, len3 = extra_links.length; l < len3; l++) {
      link = extra_links[l];
      results.push($(mydiv + " ul li ul").append(link));
    }
    return results;
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

//# sourceMappingURL=functions.js.map
