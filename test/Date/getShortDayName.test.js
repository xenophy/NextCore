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
// {{{ NX.Date.getShortDayName Tests

module.exports = {

    // {{{ 'test getShortDayName#pattern1'

    'test getShortDayName#pattern1': function() {

        NX.Date.getShortDayName(0).should.equal('Sun');
        NX.Date.getShortDayName(1).should.equal('Mon');
        NX.Date.getShortDayName(2).should.equal('Tue');
        NX.Date.getShortDayName(3).should.equal('Wed');
        NX.Date.getShortDayName(4).should.equal('Thu');
        NX.Date.getShortDayName(5).should.equal('Fri');
        NX.Date.getShortDayName(6).should.equal('Sat');

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
