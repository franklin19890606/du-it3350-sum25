function getResponse(url, callback, data) {
  return jQuery.get({url, data, success: callback, crossDomain: true});
}