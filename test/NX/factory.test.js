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
// {{{ NX.factory Tests

module.exports = {

    // {{{ test factory#pattern1

    'test factory#pattern1': function() {

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls', {
            hoge: function() {
                return 'bar1';
            }
        });
        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls2', {
            hoge: function() {
                return 'bar2';
            }
        });
        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls3', {
            hoge: function() {
                return 'bar3';
            }
        });

        var clses = NX.factory(['p1cls', 'p1cls2', 'p1cls3'], 'NXTest.ClassManager.NX.factory');

        clses[0].hoge().should.equal('bar1');
        clses[1].hoge().should.equal('bar2');
        clses[2].hoge().should.equal('bar3');

    },

    // }}}
    // {{{ test factory#pattern2

    'test factory#pattern2': function() {

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls4', {
            hoge: function() {
                return 'bar4';
            }
        });

        var cls = NX.factory({
            className: 'p1cls4'
        }, 'NXTest.ClassManager.NX.factory');
        cls.hoge().should.equal('bar4');

        NX.ClassManager.create('NXTest.ClassManager.NX.factory.P1cls5', {
            hoge: function() {
                return 'bar5';
            }
        });

        NXTest.ClassManager.NX.factory.P1cls5.name = 'NXTest.ClassManager.NX.factory.P1cls5';

        var cls = NX.factory(NXTest.ClassManager.NX.factory.P1cls5, 'NXTest.ClassManager.NX.factory');
        cls.hoge().should.equal('bar5');

        var cls = NX.factory(true, 'NXTest.ClassManager.NX.factory');
        cls.should.equal(true);

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
