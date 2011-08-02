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
// {{{ NX.util.Format.number Tests

module.exports = {

    // {{{ 'test number#pattern1'

    'test number#pattern1': function(beforeExit) {

        NX.util.Format.number(500).should.equal(500);
        NX.util.Format.number('a', '0.00').should.equal('');
        NX.util.Format.number(500, '0.00').should.equal('500.00');
        NX.util.Format.number(500, '0.00/i').should.equal('500.00');
        NX.util.Format.number(500, '000/i').should.equal('500');
        NX.util.Format.number(-500, '000/i').should.equal('-500');

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
