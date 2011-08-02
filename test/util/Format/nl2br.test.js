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
// {{{ NX.util.Format.nl2br Tests

module.exports = {

    // {{{ 'test nl2br#pattern1'

    'test nl2br#pattern1': function(beforeExit) {

        var tpl, ret;

        tpl = [
            'line1',
            'line2'
        ].join("\n");

        ret = NX.util.Format.nl2br(tpl);

        ret.should.equal('line1<br />line2');
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
