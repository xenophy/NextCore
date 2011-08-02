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
// {{{ NX.String.ellipsis Tests

module.exports = {

    // {{{ test ellipsis#pattern1

    'test ellipsis#pattern1': function() {

        var s = NX.String.ellipsis('abcdefghijk', 6);
        s.should.equal('abc...');

    },

    // }}}
    // {{{ test ellipsis#pattern2

    'test ellipsis#pattern2': function() {

        var s = NX.String.ellipsis('This is a pen.', 10, true);
        s.should.equal('This is...');

    },

    // }}}
    // {{{ test ellipsis#pattern3

    'test ellipsis#pattern3': function() {

        var s = NX.String.ellipsis('a', 1);
        s.should.equal('a');

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
