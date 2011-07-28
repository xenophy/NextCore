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
// {{{ NX.Date.getMonthNumber Tests

module.exports = {

    // {{{ 'test getMonthNumber#pattern1'

    'test getMonthNumber#pattern1': function() {

        NX.Date.getMonthNumber('Jan').should.equal(0);
        NX.Date.getMonthNumber('Feb').should.equal(1);
        NX.Date.getMonthNumber('Mar').should.equal(2);
        NX.Date.getMonthNumber('Apr').should.equal(3);
        NX.Date.getMonthNumber('May').should.equal(4);
        NX.Date.getMonthNumber('Jun').should.equal(5);
        NX.Date.getMonthNumber('Jul').should.equal(6);
        NX.Date.getMonthNumber('Aug').should.equal(7);
        NX.Date.getMonthNumber('Sep').should.equal(8);
        NX.Date.getMonthNumber('Oct').should.equal(9);
        NX.Date.getMonthNumber('Nov').should.equal(10);
        NX.Date.getMonthNumber('Dec').should.equal(11);

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
