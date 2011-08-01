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
// {{{ NX.Base.addStatics Tests

module.exports = {

    // {{{ test addStatics#pattern1

    'test addStatics#pattern1': function() {

        NX.ClassManager.create('NXTest.Base.addStatics.p1cls', {
            statics: {
                fee: 'baz',
            },
            hoge: function() {
                this.statics().fee.should.equal('baz');
                this.statics().foo().should.equal('bar');
            }
        });

        NXTest.Base.addStatics.p1cls.addStatics({
            foo: function() {
                return 'bar';
            }
        });

        var cls = new NXTest.Base.addStatics.p1cls();

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
