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
// {{{ NX.ClassManager.isCreated Tests

module.exports = {

    // {{{ test isCreated#pattern1

    'test isCreated#pattern1': function() {

        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p1cls');
        ret.should.equal(false);

    },

    // }}}
    // {{{ test isCreated#pattern2

    'test isCreated#pattern2': function() {

        try {
        var ret = NX.ClassManager.isCreated({});
        } catch(e) {
            e.message.should.equal('Invalid classname, must be a string and must not be empty');
        }

    },

    // }}}
    // {{{ test isCreated#pattern3

    'test isCreated#pattern3': function() {

        NX.ClassManager.create('NXTest.ClassManager.isCreated.p3cls', {});
        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p3cls');
        ret.should.equal(true);
    },

    // }}}
    // {{{ test isCreated#pattern4

    'test isCreated#pattern4': function() {

        NXTest.ClassManager.isCreated.p4cls = function() {};
        var ret = NX.ClassManager.isCreated('NXTest.ClassManager.isCreated.p4cls');
        ret.should.equal(true);
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
