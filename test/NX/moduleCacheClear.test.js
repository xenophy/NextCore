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
// {{{ NX.moduleCacheClear Tests

module.exports = {

    // {{{ test moduleCacheClear#pattern1

    'test moduleCacheClear#pattern1': function() {

        var filename = require('path').normalize(__dirname + '/../shared/req1.js');

        var src = [
            'module.exports = {',
            '    foo: "bar"',
            '};'
        ].join('');

        // ファイル書き込み
        require('fs').writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var src = [
            'module.exports = {',
            '    foo: "bar2"',
            '};'
        ].join('');

        // ファイル書き込み
        require('fs').writeFileSync(filename, src);

        var o = require(filename);

        o.foo.should.equal('bar');

        var stat = require('fs').statSync(filename);

        NX.moduleCacheClear(filename, stat.mtime);

        var o = require(filename);

        o.foo.should.equal('bar2');

        require('fs').unlinkSync(filename);

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
