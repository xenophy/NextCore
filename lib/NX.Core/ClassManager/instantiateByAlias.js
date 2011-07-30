/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.instantiateByAlias

module.exports = function() {

    var alias = arguments[0],
        args = NX.Array.slice(arguments),
        className = this.getNameByAlias(alias);

    if(!className) {

        className = this.maps.aliasToName[alias];

        if(!className) {

            NX.Error.raise({
                sourceClass: "NX",
                sourceMethod: "createByAlias",
                msg: "Cannot create an instance of unrecognized alias: " + alias
            });

        }

        /*
        TODO: Lodaer対応
        if(NX.global.console) {

            NX.global.console.warn("[NX.Loader] Synchronously loading '" + className + "'; consider adding " +
                                    "NX.require('" + alias + "') above NX.onReady");

        }

        NX.syncRequire(className);
        */
    }

    args[0] = className;

    return this.instantiate.apply(this, args);
};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
