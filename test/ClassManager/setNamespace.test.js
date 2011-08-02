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
// {{{ NX.ClassManager.setNamespace Tests

module.exports = {

    // {{{ 'test setNamespace#pattern1'

    'test setNamespace#pattern1': function() {

        NX.ClassManager.setNamespace('NXUT.NX.ClassManager.setNamespace.pattern1', true);
        NXUT.NX.ClassManager.setNamespace.pattern1.should.equal(true);

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
