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
// {{{ NX.ClassManager.create Tests

module.exports = {

    // {{{ 'test create#pattern1'

    'test create#pattern1': function() {

        try {

            NX.setLocale('en');
            NX.ClassManager.create();

        } catch(e) {

            e.msg.should.equal("Invalid class name 'undefined' specified, must be a non-empty string");

        }

    },

    // }}}
    // {{{ 'test create#pattern2'

    'test create#pattern2': function() {

        NX.ClassManager.create('cls_create_pattern2');
        cls_create_pattern2.should.be.ok;

    },

    // }}}
    // {{{ 'test create#pattern3'

    'test create#pattern3': function(beforeExit) {

        var trace = false;

        NX.ClassManager.create('cls_create_pattern3', {}, function() {
            trace = true;
        });

        beforeExit(function() {
            trace.should.be.ok;
            cls_create_pattern3.should.be.ok;
        });

    },

    // }}}
    // {{{ 'test create#pattern4'

    'test create#pattern4': function(beforeExit) {

        NX.ClassManager.create('cls_create_pattern4', {
            alternateClassName: 'alt_create_pattern4'
        });

        beforeExit(function() {
            cls_create_pattern4.should.be.ok;
            alt_create_pattern4.should.be.ok;
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
