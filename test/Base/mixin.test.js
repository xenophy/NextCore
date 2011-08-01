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
// {{{ NX.Base.mixin Tests

module.exports = {

    // {{{ test mixin#pattern1

    'test mixin#pattern1': function() {

        NX.define('NXTest.Base.mixin.p1mixin', {
            foo: 'bar',
            hoge: function() {
                return 'piyo';
            }
        });

        NX.define('NXTest.Base.mixin.p1cls', {
            p1cls: function() {
                return  'p1cls';
            }
        });

        NX.define('NXTest.Base.mixin.p1cls2', {
            extend: 'NXTest.Base.mixin.p1cls',
            p1cls2: function() {
                return  'p1cls2';
            }
        });

        NXTest.Base.mixin.p1cls2.mixin('NXTest.Base.mixin.p1mixin', NXTest.Base.mixin.p1mixin);

        cls = new NXTest.Base.mixin.p1cls2();
        cls.p1cls().should.equal('p1cls');
        cls.p1cls2().should.equal('p1cls2');
        cls.foo.should.equal('bar');
        cls.hoge().should.equal('piyo');

    },

    // }}}
    // {{{ test mixin#pattern2

    'test mixin#pattern2': function() {

        NX.define('NXTest.Base.mixin.p2cls', {
            p2cls: function() {
                return  'p2cls';
            }
        });

        NX.define('NXTest.Base.mixin.p2cls2', {
            extend: 'NXTest.Base.mixin.p2cls',
            p2cls2: function() {
                return  'p2cls2';
            }
        });

        var f = function() {};
        f.prototype = {
            foo: 'bar',
            hoge: function() {
                return 'piyo';
            }
        };

        NXTest.Base.mixin.p2cls2.mixin('NXTest.Base.mixin.p2mixin', f);

        cls = new NXTest.Base.mixin.p2cls2();
        cls.p2cls().should.equal('p2cls');
        cls.p2cls2().should.equal('p2cls2');

        cls.foo.should.equal('bar');
        cls.hoge().should.equal('piyo');
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
