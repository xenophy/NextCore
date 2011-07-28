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
// {{{ NX.String.format Tests

module.exports = {

    // {{{ test format#pattern1

    'test format#pattern1': function() {

        var cls = 'my-class', text = 'Some text';
        var s = NX.String.format('<div class="{0}">{1}</div>', cls, text);
        s.should.equal('<div class="my-class">Some text</div>');
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
