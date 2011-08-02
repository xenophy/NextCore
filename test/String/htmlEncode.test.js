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
// {{{ NX.String.htmlEncode Tests

module.exports = {

    // {{{ test htmlEncode#pattern1

    'test htmlEncode#pattern1': function() {

        var s = NX.String.htmlEncode('a&b>c<d');
        s.should.equal('a&amp;b&gt;c&lt;d');

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
