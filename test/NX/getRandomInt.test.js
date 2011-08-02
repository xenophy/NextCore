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
// {{{ NX.getRandomInt Tests

module.exports = {

    // {{{ test getRandomInt#pattern1

    'test getRandomInt#pattern1': function() {

        var n;

        n = NX.getRandomInt(0, 1024);
        if(n > 1024) { assert.ok(false); }

        n = NX.getRandomInt(0, 0);
        if(n > 0) { assert.ok(false); }
        n.should.equal(0);

        n = NX.getRandomInt(0, 1);
        if(n > 1) { assert.ok(false); }

        n = NX.getRandomInt(1, 0);
        n.should.equal(1);

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
