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
// {{{ NX.Date.formatContainsDateInfo Tests

module.exports = {

    // {{{ 'test formatContainsDateInfo#pattern1'

    'test formatContainsDateInfo#pattern1': function() {

        NX.Date.formatContainsDateInfo('2006-01-01').should.equal(false);
        NX.Date.formatContainsDateInfo('Y-m-d').should.equal(true);

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
