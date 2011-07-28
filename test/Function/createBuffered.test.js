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
// {{{ NX.Function.createBuffered Tests

module.exports = {

    // {{{ test createBuffered#pattern1

    'test createBuffered#pattern1': function() {

        var f = function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

        };

        var startTime = new Date();
        NX.Function.createBuffered(f, 50)();

    },

    // }}}
    // {{{ test createBuffered#pattern2

    'test createBuffered#pattern2': function() {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

        }

        var startTime = new Date();
        NX.Function.createBuffered(f, 50, this, [4,5,6])();

    },

    // }}}
    // {{{ test createBuffered#pattern3

    'test createBuffered#pattern3': function() {

        var f = function(arg1, arg2, arg3) {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(50-1,10000);

            arg1.should.equal(4);
            arg2.should.equal(5);
            arg3.should.equal(6);

        }

        var startTime = new Date();
        var buff = NX.Function.createBuffered(f, 50, this, [4,5,6]);
        buff();
        buff();

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
