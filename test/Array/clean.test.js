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
// {{{ NX.Array.clean Tests

module.exports = {

    // {{{ 'test clean#pattern1'

    'test clean#pattern1': function() {

        var a = [1,2,3];
        var ret = NX.Array.clean(a);

        ret.length.should.equal(3);
        ret.should.not.equal(a);
    },

    // }}}
    // {{{ 'test clean#pattern2'

    'test clean#pattern2': function() {

        var a = [1,'',3];
        var ret = NX.Array.clean(a);

        ret.length.should.equal(2);
        ret[0].should.equal(1);
        ret[1].should.equal(3);
        ret.should.not.equal(a);
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
