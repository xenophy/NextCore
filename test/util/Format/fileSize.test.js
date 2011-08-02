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
// {{{ NX.util.Format.fileSize Tests

module.exports = {

    // {{{ 'test fileSize#pattern1'

    'test fileSize#pattern1': function(beforeExit) {

        NX.util.Format.fileSize(500).should.equal('500 bytes');
        NX.util.Format.fileSize(5000).should.equal('4.9 KB');
        NX.util.Format.fileSize(5000000).should.equal('4.8 MB');

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
