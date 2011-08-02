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
// {{{ NX.Function.defer Tests

module.exports = {

    // {{{ test defer#pattern1

    'test defer#pattern1': function() {

        var startTime = new Date();

        NX.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(10-1,10000);

        }, 10).should.not.equal(0);

    },

    // }}}
    // {{{ test defer#pattern2

    'test defer#pattern2': function() {

        var startTime = new Date();

        NX.Function.defer(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(0,10000);

        }).should.equal(0);

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
