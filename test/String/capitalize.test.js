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
// {{{ NX.String.capitalize Tests

module.exports = {

    // {{{ test capitalize#pattern1

    'test capitalize#pattern1': function() {
        NX.String.capitalize('nextjs').should.equal('Nextjs');
    },

    // }}}
    // {{{ test capitalize#pattern2

    'test capitalize#pattern2': function() {
        NX.String.capitalize('NextJS').should.equal('NextJS');
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
