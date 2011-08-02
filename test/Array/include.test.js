/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright(c) 2006-2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ requires

require('nx-core');
require('should');
assert = require('assert');

// }}}
// {{{ NX.Array.include Tests

module.exports = {

    // {{{ 'test include#pattern1'

    'test include#pattern1': function() {

        var arr;

        arr = [1,2,3,4,5];

        NX.Array.include(arr, 3);
        arr.length.should.equal(5);

        NX.Array.include(arr, 6);
        arr.length.should.equal(6);
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
