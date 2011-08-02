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
// {{{ NX.Array.splice Tests

module.exports = {

    // {{{ 'test splice#pattern1'

    'test splice#pattern1': function() {

        var a = new Array("A", "B", "C", "D", "E", "F", "G");
        NX.Array.splice(a, 2, 3, "c", "d", "e");

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
