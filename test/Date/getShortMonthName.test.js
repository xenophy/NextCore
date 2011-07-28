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
// {{{ NX.Date.getShortMonthName Tests

module.exports = {

    // {{{ 'test getShortMonthName#pattern1'

    'test getShortMonthName#pattern1': function() {

        NX.Date.getShortMonthName(0).should.equal('Jan');
        NX.Date.getShortMonthName(1).should.equal('Feb');
        NX.Date.getShortMonthName(2).should.equal('Mar');
        NX.Date.getShortMonthName(3).should.equal('Apr');
        NX.Date.getShortMonthName(4).should.equal('May');
        NX.Date.getShortMonthName(5).should.equal('Jun');
        NX.Date.getShortMonthName(6).should.equal('Jul');
        NX.Date.getShortMonthName(7).should.equal('Aug');
        NX.Date.getShortMonthName(8).should.equal('Sep');
        NX.Date.getShortMonthName(9).should.equal('Oct');
        NX.Date.getShortMonthName(10).should.equal('Nov');
        NX.Date.getShortMonthName(11).should.equal('Dec');

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
