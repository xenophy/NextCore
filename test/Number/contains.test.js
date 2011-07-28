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
// {{{ NX.Number.contains Tests

module.exports = {

    // {{{ 'test contains#pattern1'

    'test contains#pattern1': function() {

        NX.Number.constrain(5, 2, 10).should.equal(5);
        NX.Number.constrain(5, 2, 4).should.equal(4);
        NX.Number.constrain(1, 2, 4).should.equal(2);

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
