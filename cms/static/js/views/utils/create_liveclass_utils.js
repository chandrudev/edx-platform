/**
 * Provides utilities for validating liveclass during creation.
 */
 define(['jquery', 'gettext', 'common/js/components/utils/view_utils', 'js/views/utils/create_utils_base'],
 function($, gettext, ViewUtils, CreateUtilsFactory) {
     'use strict';
     return function(selectors, classes) {
         var keyLengthViolationMessage = gettext('The combined length of the organization and library code fields' +
           ' cannot be more than <%- limit %> characters.');
        
         CreateUtilsFactory.call(this, selectors, classes);
     
         this.create = function(liveclassInfo, errorHandler) {
             $.postJSON(
                 '/live_class/details/',
                 liveclassInfo
             ).done(function(data) {
                errorHandler(data);
                // alert(window.location.href)
                //alert("d"+data)
                // window.location.reload()
                 //ViewUtils.redirect(window.location.href);
             }).fail(function(jqXHR, textStatus, errorThrown) {
                 var reason = errorThrown;
                 if (jqXHR.responseText) {
                     try {
                         var detailedReason = $.parseJSON(jqXHR.responseText).ErrMsg;
                         if (detailedReason) {
                             reason = detailedReason;
                         }
                     } catch (e) {}
                 }
                 errorHandler(reason);
             });
         };
     };
 });
