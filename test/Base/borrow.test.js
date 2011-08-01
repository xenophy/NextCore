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
// {{{ NX.Base.borrow Tests

module.exports = {

    // {{{ test borrow#pattern1

    'test borrow#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.borrow.p1cls', {
            money: '$$$',
            printMoney: function() {
                return '$$$$$$$';
            }
        });

        NX.ClassManager.create('NXTest.Base.borrow.p1cls2', {
        });

        NXTest.Base.borrow.p1cls2.borrow(NXTest.Base.borrow.p1cls, ['money', 'printMoney']);

        var steve = new NXTest.Base.borrow.p1cls2();

        steve.money.should.equal('$$$');
        steve.printMoney().should.equal('$$$$$$$');

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
