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
// {{{ NX.ClassManager.instantiateByAlias Tests

module.exports = {

    // {{{ test instantiateByAlias#pattern1

    'test instantiateByAlias#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls1', {
            test: function() {
                return 'test';
            }
        });

        NX.ClassManager.setAlias(
            'ClassManagerTest.instantiateByAlias.cls1',
            'ClassManagerTest.instantiateByAlias.cls2'
        );

        var cls2 = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls2');
        cls2.test().should.equal('test');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern2

    'test instantiateByAlias#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls3', {
            constructor: function(config) {
                NX.apply(this, config);
                return this;
            },
            test: function() {
                return this.foo;
            }
        });

        NX.ClassManager.setAlias('ClassManagerTest.instantiateByAlias.cls3', 'ClassManagerTest.instantiateByAlias.cls4');

        var cls4 = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls4', {foo: 'bar'});
        cls4.test().should.equal('bar');

    },

    // }}}
    // {{{ test instantiateByAlias#pattern3

    'test instantiateByAlias#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.instantiateByAlias.cls5', {
            singleton: true,
            alias: 'ClassManagerTest.instantiateByAlias.cls6',
            test: function() {
                return 'pattern3';
            }
        });

        try {
            var cls = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls6');
        } catch(e) {
            e.message.should.equal('\'ClassManagerTest.instantiateByAlias.cls5\' is a singleton and cannot be instantiated');
        }

    },

    // }}}
    // {{{ test instantiateByAlias#pattern4

    'test instantiateByAlias#pattern4': function() {

        try {
            var cls = NX.ClassManager.instantiateByAlias('ClassManagerTest.instantiateByAlias.cls99', {foo: 'bar'});
        } catch(e) {
            e.message.should.equal('Cannot create an instance of unrecognized alias: ClassManagerTest.instantiateByAlias.cls99');
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
