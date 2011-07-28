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

    // {{{ test apply#pattern1

    'test apply#pattern1': function() {

        var src = {}, ret;

        ret = NX.apply(src, {
            foo: 'bar'
        });

        src.should.equal(ret);
        src.foo.should.equal('bar');
    },

    // }}}
    // {{{ test apply#pattern2

    'test apply#pattern2': function() {

        var src = {}, contig, defaults, ret;

        config = {
            foo: 'bar'
        };

        defaults = {
            foo: 'default value',
            hoge: 'piyo'
        };

        ret = NX.apply(src, config, defaults);

        src.should.equal(ret);
        src.foo.should.equal('bar');
        src.hoge.should.equal('piyo');
    },

    // }}}
    // {{{ test applyIf#pattern1

    'test applyIf#pattern1': function() {

        var src, ret;

        src = {
            hoge: 'piyo'
        };

        ret = NX.applyIf(src, {
            foo: 'bar'
        });

        assert.equal(src, ret, 'Test apply standard return value');
        assert.equal(src.foo, 'bar', 'Test apply standard value bar');
        assert.equal(src.hoge, 'piyo', 'Test apply standard value piyo');
    },

    // }}}
    // {{{ test applyIf#pattern2

    'test applyIf#pattern2': function() {

        var src, config, ret;

        src = {
            foo: 'original'
        };

        config = {
            foo: 'bar'
        };

        ret = NX.applyIf(src, config);

        assert.equal(src, ret, 'Test apply defaults return value');
        assert.equal(src.foo, 'original', 'Test apply default key foo');

    },

    // }}}
    // {{{ test clone#pattern1

    'test clone#pattern1': function() {

        var o, c;

        o = {
            src: 'src object'
        };

        c = NX.clone(o);

        o.src.should.equal('src object');
        c.src.should.equal('src object');

        o.src = 'changed';

        o.src.should.equal('changed');
        c.src.should.equal('src object');

    },

    // }}}
    // {{{ test clone#pattern2

    'test clone#pattern2': function() {

        var o, c;

        o = function() {
            return 'original';
        };

        c = NX.clone(o);

        o().should.equal('original');
        c().should.equal('original');

        o = function() {
            return 'replace';
        }

        o().should.equal('replace');
        c().should.equal('original');

    },

    // }}}
    // {{{ test clone#pattern3

    'test clone#pattern3': function() {

        var dt, dt2;

        dt = new Date();
        dt2 = NX.clone(dt);

        dt.getMilliseconds().should.equal(dt2.getMilliseconds());
        dt2.setMilliseconds(500);
        dt.getMilliseconds().should.not.equal(dt2.getMilliseconds());
    },

    // }}}
    // {{{ test clone#pattern4

    'test clone#pattern4': function() {

        var o, c;

        o = [1,2,3];
        c = NX.clone(o);

        o[0].should.equal(1);
        o[1].should.equal(2);
        o[2].should.equal(3);

        c[0].should.equal(1);
        c[1].should.equal(2);
        c[2].should.equal(3);

        o.push(4);

        o.length.should.equal(4);
        c.length.should.equal(3);

    },

    // }}}
    // {{{ test clone#pattern5

    'test clone#pattern5': function() {

        var o, c;

        o = {
            cn: [{
                tag: 'a'
            },{
                tag: 'span'
            }]
        };
        o.obj = o.cn;

        c = NX.clone(o);

        o.cn[0].tag.should.equal('a');
        o.cn[1].tag.should.equal('span');

        c.cn[0].tag.should.equal('a');
        c.cn[1].tag.should.equal('span');

        o.obj[0].tag.should.equal('a');
        o.obj[1].tag.should.equal('span');

        c.obj[0].tag.should.equal('a');
        c.obj[1].tag.should.equal('span');

        c.cn.push({tag: 'div'});

        o.cn.length.should.equal(2);
        c.cn.length.should.equal(3);

        o.obj.length.should.equal(2);
        c.obj.length.should.equal(2);

    },

    // }}}
    // {{{ test clone#pattern6

    'test clone#pattern6': function() {

        var c;

        c = NX.clone();
        assert.equal(c, undefined);

        c = NX.clone(null);
        assert.equal(c, null);

        c = NX.clone('');
        assert.equal(c, '');

    },

    // }}}
    // {{{ test emptyFn#pattern1

    'test emptyFn#pattern1': function() {

        var ret;

        ret = NX.emptyFn();

        assert.equal(ret, undefined);

    },

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
