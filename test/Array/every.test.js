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
// {{{ NX.Array.every Tests

module.exports = {

    // {{{ 'test every#pattern1'

    'test every#pattern1': function() {

        var isBigEnough = function(element, index, array) {
            return (element >= 10);
        }
        var passed = NX.Array.every([12, 5, 8, 130, 44], isBigEnough);
        passed.should.equal(false);

        passed = NX.Array.every([12, 54, 18, 130, 44], isBigEnough);
        passed.should.equal(true);

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
