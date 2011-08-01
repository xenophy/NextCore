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
// {{{ NX.ClassManager.getNamesByExpression Tests

module.exports = {

    // {{{ test getNamesByExpression#pattern1

    'test getNamesByExpression#pattern1': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpressoin#pattern2

    'test getNamesByExpression#pattern2': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern3

    'test getNamesByExpression#pattern3': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls1');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls2');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls2');

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalt.getNamesByExpression.cls3');
        ret.length.should.equal(1);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern4

    'test getNamesByExpression#pattern4': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.getNamesByExpression.*');
        ret.length.should.equal(3);
        ret[0].should.equal('ClassManagerTest.getNamesByExpression.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern5

    'test getNamesByExpression#pattern5': function() {

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls1', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls1',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls1',
            test: function() {
                return 'cls1.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls2', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls2',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls2',
            test: function() {
                return 'cls2.pattern1';
            }
        });

        NX.ClassManager.create('ClassManagerTest.getNamesByExpression.p5.cls3', {
            alias: 'ClassManagerTest.testalias.getNamesByExpression.p5.cls3',
            alternateClassName: 'ClassManagerTest.testalt.getNamesByExpression.p5.cls3',
            test: function() {
                return 'cls3.pattern1';
            }
        });

        var ret = NX.ClassManager.getNamesByExpression('ClassManagerTest.testalias.getNamesByExpression.p5.*');
        ret.length.should.equal(3);

        ret[0].should.equal('ClassManagerTest.getNamesByExpression.p5.cls1');
        ret[1].should.equal('ClassManagerTest.getNamesByExpression.p5.cls2');
        ret[2].should.equal('ClassManagerTest.getNamesByExpression.p5.cls3');

    },

    // }}}
    // {{{ test getNamesByExpression#pattern6

    'test getNamesByExpression#pattern6': function() {

        try{
            var ret = NX.ClassManager.getNamesByExpression({});
        } catch(e) {
            e.message.should.equal('Expression [object Object] is invalid, must be a non-empty string');
        }

    },

    // }}}
    // {{{ test dynInstantiate#pattern1

    'test dynInstantiate#pattern1': function() {

        var test, test2;
        NX.ClassManager.create('ClassManagerTest.dynInstantiate.p1.cls1', {
            constructor: function(arg1, arg2) {
                test = arg1;
                test2 = arg2;
            }
        });

        var x = NX.ClassManager.dynInstantiate('ClassManagerTest.dynInstantiate.p1.cls1', [100, 200]);

        test.should.equal(100);
        test2.should.equal(200);

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
