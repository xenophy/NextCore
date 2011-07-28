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
// {{{ NX.Date.format Tests

module.exports = {

    // {{{ 'test format#pattern1'

    'test format#pattern1': function() {

        var dt = new Date('1/10/2007 03:05:01 PM GMT-0600');

        NX.Date.format(dt, 'Y-m-d').should.equal('2007-01-11');
        NX.Date.format(dt, 'F j, Y, g:i a').should.equal('January 11, 2007, 6:05 am');
        NX.Date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A').should.equal('Thursday, the 11th of January 2007 06:05:01 AM');
        NX.Date.format(dt, 'c').should.equal('2007-01-11T06:05:01+09:00');
        NX.Date.format(dt, 'MS').should.equal("\\/Date(1168463101000)\\/");
        NX.Date.format(dt, 'D').should.equal('Thu');

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
