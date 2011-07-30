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
// {{{ NX.ClassManager.createNamespaces Tests

module.exports = {

    // {{{ 'test createNamespaces#pattern1'

    'test createNamespaces#pattern1': function() {

        try {
            NX.setLocale('en');
            NX.ClassManager.createNamespaces({});
        } catch(e) {
            e.sourceClass.should.equal('NX.ClassManager');
            e.sourceMethod.should.equal('parseNamespace');
            e.msg.should.equal('Invalid namespace, must be a string');
            e.message.should.equal('Invalid namespace, must be a string');
        }

    },

    // }}}
    // {{{ test createNamespaces#pattern2

    'test createNamespaces#pattern2': function() {

        NX.ClassManager.createNamespaces('NX.unittest_dummy');
        NX.unittest_dummy.should.be.ok;

        NX.ClassManager.createNamespaces('NX.unittest.dummy');
        NX.unittest.dummy.should.be.ok;

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
