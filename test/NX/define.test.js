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
// {{{ NX.define Tests

module.exports = {

    // {{{ test define#pattern2

    'test define#pattern2': function() {

         NX.define('NXTest.define.cls2', {
             config: {
                 name: 'Awesome',
                 isAwesome: true
             },
             constructor: function(config) {
                 this.initConfig(config);
                 return this;
             },
             applyName : function(val) {
                 return "[" + val + "]";
             }
        });

        NX.define('NXTest.define.cls3', {
            extend: 'NXTest.define.cls2',
            constructor : function() {
                this.callParent(arguments);
            }
        });


        var cls3 = new NXTest.define.cls3();

        cls3.getName().should.equal('[Awesome]');
        cls3.getIsAwesome().should.equal(true);

        cls3.setName('Next JS');
        cls3.getName().should.equal('[Next JS]');

    },

    // }}}
    // {{{ test define#pattern3

    'test define#pattern3': function() {

         NX.define('NXTest.define.cls4', {
             statics: {
                 value: 123,
                 func: function() {
                     return 'foo';
                 }
             }
         });
         NXTest.define.cls4.value.should.equal(123);
         NXTest.define.cls4.func().should.equal('foo');

    },

    // }}}
    // {{{ test define#pattern4

    'test define#pattern4': function() {

        var f = function() {
        };

        NX.define('NXTest.define.cls5', {
            extend: f
        });

        var cls = new NXTest.define.cls5();

        NX.isFunction(cls.initConfig).should.be.ok;

    },

    // }}}
    // {{{ test define#pattern5

    'test define#pattern5': function() {

        NX.define('NXTest.define.cls61', {
            config: {
                fee: 'baz'
            },
            foo: 'bar',
            hoge: function() {
                return 'hoge';
            }
        });

        var cls = new NXTest.define.cls61();
        cls.hoge().should.equal('hoge');
        cls.foo.should.equal('bar');

        NX.define('NXTest.define.cls62', {
            config: {
                fee: 'boo'
            },
            mixins: [
                'NXTest.define.cls61'
            ]
        });

        var cls = new NXTest.define.cls62();

        cls.hoge().should.equal('hoge');
        cls.foo.should.equal('bar');
        cls.config.fee.should.equal('boo');

    },

    // }}}
    // {{{ test define#pattern6

    'test define#pattern6': function() {

        NX.define('NXTest.define.p6cls', {
        });

        NX.define('NXTest.define.p6cls2', {
        });

        NX.define('NXTest.define.p6cls3', {
            mixins: {
                '0': 'NXTest.define.p6cls',
                '1': 'NXTest.define.p6cls2'
            }
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
