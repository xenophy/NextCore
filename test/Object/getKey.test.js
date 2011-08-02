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
// {{{ NX.Object.getKey Tests

module.exports = {

    // {{{ test getKey#pattern1

    'test getKey#pattern1': function() {

        var o = {
            key1: 1,
            key2: 2,
            key3: 3
        };

        NX.Object.getKey(o, 1).should.equal('key1');
        var ret = NX.Object.getKey(o, 5);
        assert.equal(ret, null);

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
