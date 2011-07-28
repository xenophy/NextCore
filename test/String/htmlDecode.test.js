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
// {{{ NX.String.htmlDecode Tests

module.exports = {

    // {{{ test htmlDecode#pattern1

    'test htmlDecode#pattern1': function() {

        var s = NX.String.htmlDecode('a&amp;b&gt;c&lt;d');
        s.should.equal('a&b>c<d');

    },

    // }}}
    // {{{ test htmlDecode#pattern2

    'test htmlDecode#pattern2': function() {

        var s = NX.String.htmlDecode('&#65;&#66;&#67;');
        s.should.equal('ABC');

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
