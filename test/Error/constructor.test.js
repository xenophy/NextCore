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
// {{{ NX.Error.constructor Tests

module.exports = {

    // {{{ 'test constructor#pattern1'

    'test raise#pattern1': function() {

        var err = new NX.Error('piyo');

        try {
            throw err;
        } catch(e) {
            e.msg.should.equal('piyo');
        }

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
