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
// {{{ NX.Array.toArray Tests

module.exports = {

    // {{{ test toArray#pattern1

    'test toArray#pattern1': function() {

        var ret;
        var arr = [1,2,3,4,5];

        ret = NX.Array.toArray(arr, 2, 4);

        ret.length.should.equal(2);
        ret[0].should.equal(3);
        ret[1].should.equal(4);

    },

    // }}}
    // {{{ test toArray#pattern2

    'test toArray#pattern2': function() {

        var ret = NX.Array.toArray('abc');

        ret[0].should.equal('a');
        ret[1].should.equal('b');
        ret[2].should.equal('c');

    },

    // }}}
    // {{{ test toArray#pattern3

    'test toArray#pattern3': function() {

        var ret = NX.Array.toArray('abc', 1, 2);

        ret[0].should.equal('b');

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
