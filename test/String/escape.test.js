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
// {{{ NX.String.escape Tests

module.exports = {

    // {{{ test escape#pattern1

    'test escape#pattern1': function() {
        NX.String.escape("'").should.equal("\\'");
    },

    // }}}
    // {{{ test escape#pattern2

    'test escape#pattern2': function() {
        NX.String.escape("\\").should.equal("\\\\");
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
