

<<<<<<< HEAD
(function(globals) {

  var django = globals.django || (globals.django = {});
=======
'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
<<<<<<< HEAD
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
=======
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
      }
    };

    django.ngettext = function(singular, plural, count) {
<<<<<<< HEAD
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
=======
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
<<<<<<< HEAD
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
=======
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
<<<<<<< HEAD
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
=======
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P",
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
<<<<<<< HEAD
      "%Y-%m-%d",
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%Y",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M",
      "%m/%d/%y"
=======
      "%m/%d/%Y %H:%M:%S",
      "%m/%d/%Y %H:%M:%S.%f",
      "%m/%d/%Y %H:%M",
      "%m/%d/%y %H:%M:%S",
      "%m/%d/%y %H:%M:%S.%f",
      "%m/%d/%y %H:%M"
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ],
    "DATE_FORMAT": "N j, Y",
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d",
      "%m/%d/%Y",
      "%m/%d/%y",
      "%b %d %Y",
      "%b %d, %Y",
      "%d %b %Y",
      "%d %b, %Y",
      "%B %d %Y",
      "%B %d, %Y",
      "%d %B %Y",
      "%d %B, %Y"
    ],
    "DECIMAL_SEPARATOR": ".",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "F j",
    "NUMBER_GROUPING": 0,
    "SHORT_DATETIME_FORMAT": "m/d/Y P",
    "SHORT_DATE_FORMAT": "m/d/Y",
    "THOUSAND_SEPARATOR": ",",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
<<<<<<< HEAD
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
=======
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
<<<<<<< HEAD

}(this));
=======
};
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

