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
// {{{ NX.Date.getFormatCode Tests

module.exports = {

    // {{{ 'test getFormatCode#pattern1'

    'test getFormatCode#pattern1': function() {

        NX.Date.formatCodes.x = "NX.util.Format.leftPad(this.getDate(), 2, '0')";

        NX.Date.format(new Date('2006-01-01'), 'X').should.equal('X');
        NX.Date.format(new Date('2006-01-01'), 'x').should.equal('01');

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
