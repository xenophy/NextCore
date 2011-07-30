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
// {{{ NX.ClassManager.create Tests

module.exports = {

    // {{{ 'test create#pattern1'

    'test create#pattern1': function() {

        try {

            NX.setLocale('en');
            NX.ClassManager.create();

        } catch(e) {

            e.msg.should.equal("Invalid class name 'undefined' specified, must be a non-empty string");

        }

    },

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
