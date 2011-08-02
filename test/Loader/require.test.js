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
// {{{ NX.Loader.require Tests

module.exports = {

    // {{{ test require#pattern1

    'test require#pattern1': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var ret = NX.Loader.require('My.Test');
        var ret = NX.Loader.require('My.Test2');

        cls = new My.Test();
        cls.foo().should.equal('My.Test.foo');

        cls = new My.Test2();
        cls.foo().should.equal('My.Test2.foo');
    },

    // }}}
    // {{{ test require#pattern2

    'test require#pattern2': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var cls = NX.create('My.extend.Test2');
        cls.foo().should.equal('My.extend.Test2.foo');
        cls.bar().should.equal('My.extend.Test.bar');

    },

    // }}}
    // {{{ test require#pattern3

    'test require#pattern3': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var cls = NX.create('My.extend2.Test3');
        cls.foo().should.equal('My.extend2.Test3.foo');
        cls.bar().should.equal('My.extend2.Test2.bar');
        cls.baz().should.equal('My.extend2.Test.baz');

    },

    // }}}
    // {{{ test require#pattern4

    'test require#pattern4': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var cls = NX.create('My.mixins.Test');

        cls.foo().should.equal('My.mixins.Test.foo');
        cls.bar().should.equal('My.mixins.Test.bar');
        cls.mix1().should.equal('My.mixins.Mix1.mix1');
        cls.mix2().should.equal('My.mixins.Mix2.mix2');

    },

    // }}}
    // {{{ test require#pattern5

    'test require#pattern5': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var cls = NX.create('My.requires.Test');
        cls.foo().should.equal('My.requires.Req1.req1');
        cls.bar().should.equal('My.requires.Req2.req2');

    },

    // }}}
    // {{{ test require#pattern6

    'test require#pattern6': function() {

        NX.Loader.setConfig({
            enabled: true,
            paths: {
                'My': __dirname + '/../shared/src/Loader/'
            }
        });

        var cls = NX.create('My.requires2.Test');
        cls.foo().should.equal('My.requires2.Req1.req1');

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
