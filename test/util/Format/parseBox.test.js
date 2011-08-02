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
// {{{ NX.util.Format.parseBox Tests

module.exports = {

    // {{{ 'test parseBox#pattern1'

    'test parseBox#pattern1': function(beforeExit) {

        var ret = NX.util.Format.parseBox('10 10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10 10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10 10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox('10');
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);

        var ret = NX.util.Format.parseBox(10);
        ret.top.should.equal(10);
        ret.bottom.should.equal(10);
        ret.left.should.equal(10);
        ret.right.should.equal(10);
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
