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
// {{{ NX.Array.from Tests

module.exports = {

    // {{{ test from#pattern1

    'test from#pattern1': function() {

        var o = {
            a: 1,
            b: 2,
            c: 3
        };

        var ret = NX.Array.from(o);

        ret.length.should.equal(1);
        ret[0].a.should.equal(1);
        ret[0].b.should.equal(2);
        ret[0].c.should.equal(3);

    },

    // }}}
    // {{{ test from#pattern2

    'test from#pattern2': function() {

        var f = function() {
            var ret = NX.Array.from(arguments);

            ret.length.should.equal(3);
            ret[0].should.equal(1);
            ret[1].should.equal(2);
            ret[2].should.equal(3);
        };

        f(1,2,3);
    },

    // }}}
    // {{{ test from#pattern3

    'test from#pattern3': function() {

        var ret = NX.Array.from(1);
        ret[0].should.equal(1);
        ret.length.should.equal(1);

    },

    // }}}
    // {{{ test from#pattern4

    'test from#pattern4': function() {

        var ret = NX.Array.from(undefined);
        ret.length.should.equal(0);

    },

    // }}}
    // {{{ test from#pattern5

    'test from#pattern5': function() {

        var a = [1,2,3];
        var ret = NX.Array.from(a, true);

        ret.length.should.equal(3);
        ret[0].should.not.equal(a);
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
