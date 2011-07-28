/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next JS
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

var stripScriptsRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/ig;

// {{{ NX.util.Format.stripScripts

module.exports = function(v) {
    return !v ? v : String(v).replace(stripScriptsRe, "");
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
