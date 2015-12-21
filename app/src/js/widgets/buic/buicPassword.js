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
            '<div class="progress-bar" role="progressbar" style="width:0"></div>' +
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
            var self = this,
                bar = $(barTemplate);

            // Attach and detach the progressbar.
            self.element.parent().append(bar);

            // Initialize complexify.
            self.element.complexify(
                {
                    banMode: self.options.banMode,
                    bannedPasswords: self.options.banned,
                    minimumChars: self.options.minChars,
                    strengthScaleFactor: self.options.scaleFactor
                }, function (valid, complexity) {
                    bar
                        .toggleClass('progress-bar-danger', complexity < 40)
                        .toggleClass('progress-bar-warning', complexity < 50)
                        .toggleClass('progress-bar-success', complexity >= 50)
                        .css({'width': complexity + '%'});
                }
            );
        },

        /**
         * Default options.
         *
         * @property {string}   banMode     - "strict" or "loose"
         * @property {string[]} banned      - A list of passwords that will always return 0% complexity
         * @property {number}   minChars    - Minimum number of characters that the password must have to be valid
         * @property {number}   scaleFactor - Scale factor applied to the calculated password strength
         */
        options: {
            banMode: 'strict',
            banned: [],
            minChars: 6,
            scaleFactor: 0.6
        }
    });
})(jQuery);
