/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.node.ChildProcess

NX.define('NX.node.ChildProcess', NX.apply(require('child_process'), {

    // {{{ singleton

    singleton: true,

    // }}}
    // {{{ alternateClassName

    alternateClassName: 'NX.ChildProcess'

    // }}}

}));

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
