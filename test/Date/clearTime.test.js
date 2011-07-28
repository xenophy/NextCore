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
// {{{ NX.Date.clearTime Tests

module.exports = {

    // {{{ 'test clearTime#pattern1'

    'test clearTime#pattern1': function() {

        var dt = NX.Date.clearTime(new Date('2011/05/16 09:12:54'));
        dt.getHours().should.equal(0);
        dt.getMinutes().should.equal(0);
        dt.getSeconds().should.equal(0);

        var dt2 = new Date('2011/05/16 09:12:54');
        var dt3 = NX.Date.clearTime(dt2, true);

        dt3.should.not.equal(dt2);

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
