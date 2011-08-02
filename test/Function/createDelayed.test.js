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
// {{{ NX.Function.createDelayed Tests

module.exports = {

    // {{{ test createDelayed#pattern1

    'test createDelayed#pattern1': function() {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
        };

        var df = NX.Function.createDelayed(f, 10);
        df();

    },

    // }}}
    // {{{ test createDelayed#pattern2

    'test createDelayed#pattern2': function() {

        var startTime = new Date();
        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            this.foo.should.equal('bar');
        };

        var df = NX.Function.createDelayed(f, 10, {foo: 'bar'});
        df();

    },

    // }}}
    // {{{ test createDelayed#pattern3

    'test createDelayed#pattern3': function() {

        var startTime = new Date();
        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);
            arg1.should.equal(1);
            arg2.should.equal(2);
            arg3.should.equal(3);
        };

        var df = NX.Function.createDelayed(f, 10, {foo: 'bar'}, [1, 2, 3], true);
        df();

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
