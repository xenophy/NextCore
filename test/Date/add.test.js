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
// {{{ NX.Date.add Tests

module.exports = {

    // {{{ 'test add#pattern1'

    'test add#pattern1': function() {

        var dt = NX.Date.add(new Date('10/29/2006'), NX.Date.DAY, 5);
        dt.getDate().should.equal(3);
        dt.getMonth().should.equal(10);

        var dt2 = NX.Date.add(new Date('10/1/2006'), NX.Date.DAY, -5);
        dt2.getDate().should.equal(26);
        dt2.getMonth().should.equal(8);

        var dt3 = NX.Date.add(new Date('10/1/2006'), null, -5);
        dt3.getDate().should.equal(1);
        dt3.getMonth().should.equal(9);

        var dt4 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MILLI, 5);
        dt4.getMilliseconds().should.equal(5);

        var dt5 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.SECOND, 5);
        dt5.getSeconds().should.equal(5);

        var dt6 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MINUTE, 5);
        dt6.getMinutes().should.equal(5);

        var dt7 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.HOUR, 5);
        dt7.getHours().should.equal(5);

        var dt8 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.MONTH, 5);
        dt8.getMonth().should.equal(2);
        dt8.getFullYear().should.equal(2007);

        var dt9 = NX.Date.add(new Date('10/29/2006 00:00:00'), NX.Date.YEAR, 5);
        dt9.getFullYear().should.equal(2011);

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
