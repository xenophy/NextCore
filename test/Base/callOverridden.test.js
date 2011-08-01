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
// {{{ NX.Base.callOverridden Tests

module.exports = {

    // {{{ test callOverridden#pattern1

    'test callOverridden#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p1cls', {
            hoge: function() {
                return 'org';
            }
        });

        NX.ClassManager.create('NXTest.Base.callOverridden.p1cls2', {
            extend: 'NXTest.Base.callOverridden.p1cls',
            hoge: function() {
                this.callOverridden().should.equal('org');
            }
        });

        try{
            NX.setLocale('en');
            var cls = new NXTest.Base.callOverridden.p1cls2();
            cls.hoge();
        } catch(e) {
            e.message.should.equal('this.callOverridden was called in \'hoge\' but this method has never been overridden');
        }

    },

    // }}}
    // {{{ test callOverridden#pattern2

    'test callOverridden#pattern2': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p2cls', {
            hoge: function() {
                return 'org';
            }
        });

        NXTest.Base.callOverridden.p2cls.override({
            hoge: function() {
                this.callOverridden().should.equal('org');
            }
        });

        var cls = new NXTest.Base.callOverridden.p2cls();
        cls.hoge();

    },

    // }}}
    // {{{ test callOverridden#pattern3

    'test callOverridden#pattern3': function() {

        NX.ClassManager.create('NXTest.Base.callOverridden.p3cls', {
            hoge: function() {
                return 'org';
            }
        });

        var me = this;
        var cls = new NXTest.Base.callOverridden.p3cls();

        NXTest.Base.callOverridden.p3cls.override({
            hoge: function() {

                NXTest.Base.callOverridden.p3cls.prototype.hoge['$owner'] = null;

                try{
                    NX.setLocale('en');
                    this.callOverridden().should.equal('org');
                } catch(e) {
                    e.message.should.equal("Attempting to call a protected method from the public scope, which is not allowed");
                }
            }
        });

        cls.hoge();

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
