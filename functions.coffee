###
Add more links to vocabuary.com word page.
Created by tux, Sat Feb  8 23:48:59 CST 2014
###

DEBUG = true
DEBUG = false

container = "div.wordPage"
outerContainer = "#dictionaryContent"


sites = [
  {
    'name': 'Dictionary.com',
    'link': 'http://dictionary.reference.com/browse/',
    'class': 'dictionarycom'
  },
  {
    'name': 'Youdao',
    'link': 'http://dict.youdao.com/search?q=',
    'class': 'youdao'
  },
  {
    'name': 'Etymology',
    'link': 'http://etymonline.com/index.php?search=',
    'class': 'etymology'
  },
  {
    'name': 'Google Define',
    'link': 'https://www.google.com/search?q=define%3A+',
    'class': 'googledefine'
  },
  {
    'name': 'Google Search',
    'link': 'https://www.google.com/search?q=',
    'class': 'googlesearch'
  },
  {
    'name': 'Google Images',
    'link': 'https://www.google.com/search?tbm=isch&q='
    'class': 'googleimages'
  },
]

hasMangled = false

mangle = ->
  word = $.trim $("#{ container } h1").text()
  site_tools = "#{ container } div.tools"
  mydiv_content = '<div class="ext-link"></div>'
  mydiv = "#{ container } div.ext-link"

  # First remove added div then add it.
  $(mydiv).remove()
  links = ("<a target='_blank' class='ext-link tbutton #{ site["class"]}' href='#{ site["link"] }#{ word }'>#{ site["name"] }</a>" for site in sites)

  if DEBUG
    console.log "word: #{ word }", links

  ($ site_tools).after mydiv_content
  (($ mydiv).append link) for link in links

  hasMangled = true


DOMModificationHandler = (e) ->
  return $(this).unbind("DOMSubtreeModified") if hasMangled

  # http://stackoverflow.com/q/11084819
  $(this).unbind "DOMSubtreeModified"
  setTimeout (->
    mangle()
    $(outerContainer).bind "DOMSubtreeModified", DOMModificationHandler
  ), 1000

$(outerContainer).bind "DOMSubtreeModified", DOMModificationHandler
