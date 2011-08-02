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
// {{{ NX.Array.lastIndexOf Tests

module.exports = {

    // {{{ 'test lastIndexOf#pattern1'

    'test lastIndexOf#pattern1': function() {

        var array = [2, 5, 9, 2];
        var index = NX.Array.lastIndexOf(array, 2);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 7);
        index.should.equal(-1);

        index = NX.Array.lastIndexOf(array, 2, 3);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 2, 2);
        index.should.equal(0);

        index = NX.Array.lastIndexOf(array, 2, -2);
        index.should.equal(0);

        index = NX.Array.lastIndexOf(array, 2, -1);
        index.should.equal(3);

        index = NX.Array.lastIndexOf(array, 2, 10);
        index.should.equal(3);

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
