/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.setAlias

module.exports = function(cls, alias) {

    var aliasToNameMap = this.maps.aliasToName,
        nameToAliasesMap = this.maps.nameToAliases,
        className;

    if(typeof cls === 'string') {

        className = cls;

    } else {

        className = this.getName(cls);

    }

    if(alias && aliasToNameMap[alias] !== className) {

        if(aliasToNameMap.hasOwnProperty(alias) && NX.isDefined(NX.global.console)) {

            NX.log(
                NX.String.format(
                    NX.$locale["[NX.ClassManager] Overriding existing alias: '{0}' of: '{1}' with: '{2}'. Be sure it's intentional."],
                    alias,
                    aliasToNameMap[alias],
                    className
                )
            );

        }

        aliasToNameMap[alias] = className;
    }

    if(!nameToAliasesMap[className]) {

        nameToAliasesMap[className] = [];

    }

    if(alias) {

        NX.Array.include(nameToAliasesMap[className], alias);

    }

    return this;

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
