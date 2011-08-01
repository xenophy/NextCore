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
            e.sourceClass.should.equal("NX");
            e.sourceMethod.should.equal("define");
            e.msg.should.equal("Invalid class name 'undefined' specified, must be a non-empty string");
        }

    },

    // }}}
    // {{{ 'test create#pattern2'

    'test create#pattern2': function() {

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern2');
        cls_NX_ClassManager_create_pattern2.should.be.ok;

    },

    // }}}
    // {{{ 'test create#pattern3'

    'test create#pattern3': function(beforeExit) {

        var trace = false;

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern3', {}, function() {
            trace = true;
        });

        beforeExit(function() {
            trace.should.be.ok;
            cls_NX_ClassManager_create_pattern3.should.be.ok;
        });

    },

    // }}}
    // {{{ 'test create#pattern4'

    'test create#pattern4': function(beforeExit) {

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern4', {
            alternateClassName: 'alt_NX_ClassManager_create_pattern4'
        });

        beforeExit(function() {
            cls_NX_ClassManager_create_pattern4.should.be.ok;
            alt_NX_ClassManager_create_pattern4.should.be.ok;
        });

    },

    // }}}
    // {{{ 'test create#pattern5'

    'test create#pattern5': function(beforeExit) {

        var trace, trace2;

        NX.ClassManager.registerPostprocessor('postprocessor_NX_ClassManager_create_pattern5', function() {
            trace = true;
        }, true);

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern5', {
            postprocessors: ['postprocessor_NX_ClassManager_create_pattern5', function() {
                trace2 = true;
            }]
        });

        beforeExit(function() {
            trace.should.be.ok;
            trace2.should.be.ok;
        });

    },

    // }}}
    // {{{ 'test create#pattern6'

    'test create#pattern6': function(beforeExit) {

        try {
            NX.setLocale('en');
            NX.ClassManager.create('cls_NX_ClassManager_create_pattern6', {
                alternateClassName: [{}]
            });
        } catch(e) {
            e.sourceClass.should.equal("NX");
            e.sourceMethod.should.equal("define");
            e.msg.should.equal("Invalid alternate of: '[object Object]' for class: 'cls_NX_ClassManager_create_pattern6'; must be a valid string")
        }

    },

    // }}}
    // {{{ 'test create#pattern7'

    'test create#pattern7': function(beforeExit) {

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern7', {
            singleton: true,
            foo: function() {
                return 'bar';
            }
        });

        cls_NX_ClassManager_create_pattern7.foo().should.equal('bar');

    },

    // }}}
    // {{{ 'test create#pattern8'

    'test create#pattern8': function(beforeExit) {

        NX.ClassManager.create('cls_NX_ClassManager_create_pattern8', {
            alias: 'alias_NX_ClassManager_create_pattern8',
            foo: function() {
                return 'bar';
            }
        });

        var cls = NX.create('alias_NX_ClassManager_create_pattern8');

        cls.foo().should.equal('bar');

    },

    // }}}
    // {{{ 'test create#pattern9'

    'test create#pattern9': function(beforeExit) {

        try {

            NX.setLocale('en');
            NX.ClassManager.create('cls_NX_ClassManager_create_pattern9', {
                alias: {}
            });

        } catch(e) {

            e.sourceClass.should.equal("NX");
            e.sourceMethod.should.equal("define");
            e.msg.should.equal("Invalid alias of: '[object Object]' for class: 'cls_NX_ClassManager_create_pattern9'; must be a valid string")

        }

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
