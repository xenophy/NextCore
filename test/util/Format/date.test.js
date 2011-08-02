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
// {{{ NX.util.Format.date Tests

module.exports = {

    // {{{ 'test date#pattern1'

    'test date#pattern1': function(beforeExit) {

        NX.util.Format.date().should.equal('');
        NX.util.Format.date('2006-01-01').should.equal('01/01/2006');

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
