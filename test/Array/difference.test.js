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
// {{{ NX.Array.difference Tests

module.exports = {

    // {{{ 'test difference#pattern1'

    'test difference#pattern1': function() {

        var arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var arrayB = [2, 3, 5, 8, 9, 10];

        var ret = NX.Array.difference(arrayA, arrayB);

        ret.length.should.equal(4);
        ret[0].should.equal(1);
        ret[1].should.equal(4);
        ret[2].should.equal(6);
        ret[3].should.equal(7);

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
