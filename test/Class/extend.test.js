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
// {{{ NX.Class.extend Tests

module.exports = {

    // {{{ test extend#pattern1

    'test extend#pattern1': function() {

        var f = function() {
        };
        f.prototype = {
            $inheritableStatics: ['self']
        };
        f.self = 123;

        NX.define('NX.Class.extend.p1cls', {
            extend: f
        });

        NX.Class.extend.p1cls.self.should.equal(123);

    },

    // }}}
    // {{{ test extend#pattern2

    'test extend#pattern2': function() {

        var test, test2;
        var f = function() {
        };
        var g = function() {
        };
        g.prototype.$onExtended = function() {
            test = 'trace';
        }
        var clsDef = new NX.Class(f, {
            extend: g,
            onClassExtended: function() {
                test2 = 'trace';
            }
        });
        var cls = new clsDef();

        var clsDef2 = new NX.Class(f, {
            extend: clsDef
        });

        test.should.equal('trace');
        test2.should.equal('trace');

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
