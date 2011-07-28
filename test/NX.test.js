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
// {{{ NX Class Tests

module.exports = {

    // {{{ test namespace#standard

    'test namespace#standard': function() {

        NX.namespace(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App"');
        assert.ok(App.app, 'Test create Namespace "App.app"');
        assert.ok(App.form, 'Test create Namespace "App.form"');
        assert.ok(App.grid, 'Test create Namespace "App.grid"');
        assert.ok(App.tree, 'Test create Namespace "App.tree"');

    },

    // }}}
    // {{{ test namespace#shorthand

    'test namespace#shorthand': function() {

        NX.ns(
            'App',
            'App.app',
            'App.form',
            'App.grid',
            'App.tree'
        );

        assert.ok(App, 'Test create Namespace "App" with shorthand');
        assert.ok(App.app, 'Test create Namespace "App.app" with shorthand');
        assert.ok(App.form, 'Test create Namespace "App.form" with shorthand');
        assert.ok(App.grid, 'Test create Namespace "App.grid" with shorthand');
        assert.ok(App.tree, 'Test create Namespace "App.tree" with shorthand');

    },

    // }}}
    // {{{ test define#pattern1

    'test define#pattern1': function() {

        /*
         NX.define('NXTest.define.cls1', {
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

        var cls = new NXTest.define.cls1();

        cls.getName().should.equal('[Awesome]');
        cls.getIsAwesome().should.equal(true);
        cls.isAwesome.should.be.ok;

        cls.setName('Next JS');
        cls.getName().should.equal('[Next JS]');

        cls.setConfig({
            isAwesome: false
        });

        cls.getIsAwesome().should.equal(false);
        cls.isAwesome.should.not.be.ok;
        */

    },

    // }}}
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

    },

    // }}}
    // {{{ test iterate#standard

    'test iterate#standard': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, 'value1', 'Test key=key1 value=value1');
        assert.equal(dest.key2, 'value2', 'Test key=key2 value=value2');
        assert.equal(dest.key3, 'value3', 'Test key=key3 value=value3');
        assert.equal(dest.key4, 'value4', 'Test key=key4 value=value4');
        assert.equal(dest.key5, 'value5', 'Test key=key5 value=value5');

    },

    // }}}
    // {{{ test iterate#empty

    'test iterate#empty': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(undefined, function(key, v, o) {
            dest[key] = v;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

    },

    // }}}
    // {{{ test iterate#iterable

    'test iterate#iterable': function() {

        var dest = [];
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate([1,2,3,4,5], function(v, i, a) {
            dest.push(v);
        });

        assert.equal(dest[0], 1, 'Test value=1');
        assert.equal(dest[1], 2, 'Test value=2');
        assert.equal(dest[2], 3, 'Test value=3');
        assert.equal(dest[3], 4, 'Test value=4');
        assert.equal(dest[4], 5, 'Test value=5');

    },

    // }}}
    // {{{ test iterate#callbackFalse

    'test iterate#callbackFalse': function() {

        var dest = {};
        var src = {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
            key5: 'value5'
        };

        NX.iterate(src, function(key, v, o) {
            return false;
        });

        assert.equal(dest.key1, undefined, 'Test key=key1 value=undefined');
        assert.equal(dest.key2, undefined, 'Test key=key2 value=undefined');
        assert.equal(dest.key3, undefined, 'Test key=key3 value=undefined');
        assert.equal(dest.key4, undefined, 'Test key=key4 value=undefined');
        assert.equal(dest.key5, undefined, 'Test key=key5 value=undefined');

    },

    // }}}
    // {{{ test moduleCacheClear#pattern1

    'test moduleCacheClear#pattern1': function() {

        var filename = __dirname + '/shared/req1.js';

        var src = [
            'module.exports = {',
            '    foo: "bar"',
            '};'
        ].join('');

        // ファイル書き込み
        NX.Fs.writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var src = [
            'module.exports = {',
            '    foo: "bar2"',
            '};'
        ].join('');

        // ファイル書き込み
        NX.Fs.writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var stat = NX.Fs.statSync(filename);

        NX.moduleCacheClear(filename, stat.mtime);

        var o = require(filename);

        o.foo.should.equal('bar2');

        NX.Fs.unlinkSync(filename);

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
