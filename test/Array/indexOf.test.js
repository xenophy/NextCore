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
// {{{ NX.Array.indexOf Tests

module.exports = {

    // {{{ 'test indexOf#pattern1'

    'test indexOf#pattern1': function() {

        var array = [2, 5, 9];
        var index = NX.Array.indexOf(array, 2);
        index.should.equal(0);
        index = NX.Array.indexOf(array, 7);
        index.should.equal(-1);

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
