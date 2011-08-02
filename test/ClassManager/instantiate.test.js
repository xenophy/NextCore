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
// {{{ NX.ClassManager.instantiate Tests

module.exports = {

    // {{{ test instantiate#pattern1

    'test instantiate#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls1', {
            test: function() {
                return 'pattern1';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls1');
        cls.test().should.equal('pattern1');

    },

    // }}}
    // {{{ test instantiate#pattern2

    'test instantiate#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls2', {
            alias: 'ClassManagerTest.instantiate.cls3',
            test: function() {
                return 'pattern2';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls3');
        cls.test().should.equal('pattern2');

    },

    // }}}
    // {{{ test instantiate#pattern3

    'test instantiate#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls4', {
            alternateClassName: 'ClassManagerTest.instantiate.cls5',
            test: function() {
                return 'pattern3';
            }
        });

        var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls5');
        cls.test().should.equal('pattern3');

    },

    // }}}
    // {{{ test instantiate#pattern4

    'test instantiate#pattern4': function() {

        try {
            NX.setLocale('en');
            var cls = NX.ClassManager.instantiate({});
        } catch(e) {
            e.message.should.equal('Invalid class name or alias \'[object Object]\' specified, must be a non-empty string');
        }

    },

    // }}}
    // {{{ test instantiate#pattern5

    'test instantiate#pattern5': function() {

        /*
        try {
            var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls99');
        } catch(e) {
            e.message.should.equal('Cannot find module \'.ClassManagerTest/instantiate/cls99.js\'');
        }
        */

    },

    // }}}
    // {{{ test instantiate#pattern6

    'test instantiate#pattern6': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls6', {
            singleton: true,
            test: function() {
                return 'pattern4';
            }
        });

        try {
            var cls = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls6');
        } catch(e) {
            e.message.should.equal('\'ClassManagerTest.instantiate.cls6\' is a singleton and cannot be instantiated');
        }

    },

    // }}}
    // {{{ test instantiate#pattern7

    'test instantiate#pattern7': function() {

        NX.ClassManager.create('ClassManagerTest.instantiate.cls7', {
            constructor: function(config) {
                NX.apply(this, config);
                return this;
            },
            test: function() {
                return this.foo;
            }
        });

        var cls7 = NX.ClassManager.instantiate('ClassManagerTest.instantiate.cls7', {foo: 'bar'});
        cls7.test().should.equal('bar');

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
