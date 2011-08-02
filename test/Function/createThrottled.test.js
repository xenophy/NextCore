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
// {{{ NX.Function.createThrottled Tests

module.exports = {

    // {{{ test createThrottled#pattern1

    'test createThrottled#pattern1': function(beforeExit) {

        var startTime = new Date();

        var cnt = 0;

        var nf = NX.Function.createThrottled(function() {

            var endTime = new Date();
            var msec = endTime - startTime;

            msec.should.be.within(100*cnt-1,1000);

            cnt++;

        }, 100);

        for(i=0; i<100; i++) {
            nf();
        }

        beforeExit(function() {

            cnt.should.equal(2);

        });

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
