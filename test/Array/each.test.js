/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('NX.Core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Array.each Tests

module.exports = {

    // {{{ 'test each#pattern1'

    'test each#pattern1': function() {

        var sum = function() {
            var sum = 0;

            NX.Array.each(arguments, function(value) {
                sum += value;
            });

            return sum;
        };

        sum(1, 2, 3).should.equal(6);
    },

    // }}}
    // {{{ 'test each#pattern2'

    'test each#pattern2': function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];

        var ret = NX.Array.each(countries, function(name, index, countriesItSelf) {
            if(name === 'Singapore') {
                return false;
            }
        });

        ret.should.equal(1);

    },

    // }}}
    // {{{ 'test each#pattern3'

    'test each#pattern3': function() {

        var countries = ['Vietnam', 'Singapore', 'United States', 'Russia'];

        var ret = NX.Array.each(countries, function(name, index, countriesItSelf) {
            if(name === 'Singapore') {
                return false;
            }
        }, this, true);

        ret.should.equal(1);

    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
