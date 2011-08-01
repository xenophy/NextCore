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
// {{{ NX.Base.statics Tests

module.exports = {

    // {{{ test statics#pattern1

    'test statics#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.statics.p1cls', {
            statics: {
                fee: 'baz',
            },
            hoge: function() {
                this.statics().fee.should.equal('baz');
            }
        });

        NX.ClassManager.create('NXTest.Base.statics.p1cls2', {
            extend: 'NXTest.Base.statics.p1cls',
            statics: {
                poo: 'par'
            },
            hoge2: function() {
                assert.equal(this.statics().fee, undefined);
                assert.equal(this.statics().poo, 'par');

                var ret = this.statics.call({statics: {}});
                assert.equal(ret, undefined);

            }
        });

        var cls = new NXTest.Base.statics.p1cls2();

        cls.hoge();
        cls.hoge2();

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
