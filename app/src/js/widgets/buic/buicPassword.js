/**
 * @param {Object} $ - Global jQuery object
 */
(function ($) {
    'use strict';

    /**
     * Template of the complexity bar.
     *
     * @memberOf jQuery.widget.bolt.buicPassword
     * @static
     * @type string
     */
    var barTemplate =
        '<div class="progress">' +
            '<div id="complexity-bar" class="progress-bar progress-bar-success" role="progressbar" style="width:0">' +
            '</div>' +
        '</div>';

    /**
     * BUIC checkbox widget.
     *
     * @license http://opensource.org/licenses/mit-license.php MIT License
     * @author rarila
     *
     * @class buicPassword
     * @memberOf jQuery.widget.bolt
     */
    $.widget('bolt.buicPassword', /** @lends jQuery.widget.bolt.buicPassword.prototype */ {
        /**
         * The constructor of the password widget.
         *
         * @private
         */
        _create: function () {
            var bar = $(barTemplate);

            // Attach and detach the progressbar.
            this.element.parent().append(bar);
        }
    });
})(jQuery);
