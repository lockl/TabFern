// deps.js: The dependencies for main_tl.js.  This is the entryPoint used by
// Brunch to start bundling.

// A static require statement that brunch will pick up on, but that will
// never actually run.  This lists all of the top-level modules not referenced
// in the module.exports array, below.  This is what tells Brunch to
// include these top-level modules.
if((window||global||this||{}).this_var_should_never_ever_exist_bang) {
    require('./main_tl');
}

module.exports = {
    ASQ_orig: require('asynquence'),
    ASQ: require('asynquence-contrib'),
    ASQH: require('asq-helpers'),
    BLAKE2s: require('blake2s-js'),
    Buffer: require('buffer/').Buffer,
    //bypasser: require('bypasser'),	// TODO
    exporter: require('export-file'),
    hamburger: require('hamburger'),
    importer: require('import-file'),
    jquery: require('jquery'),
    jstree: require('jstree'),
    jstreeActions: require('jstree-actions'),
    jstreeBecause: require('jstree-because'),
    jstreeFlagnode: require('jstree-flagnode'),
    jstreeMultitype: require('jstree-multitype'),
    jstreeRedrawEvent: require('jstree-redraw-event'),
    justhtmlescape: require('justhtmlescape'),
    loglevel: require('loglevel'),
    multidex: require('multidex'),
    rmodal: require('rmodal'),
    signals: require('signals'),
    spin: require('spin.js'),
    tinycolor: require('tinycolor2'),
};

// Other modules used by src/view/tree.js, but not imported above yet:
//    // Modules for keyboard-shortcut handling.  Not really TabFern-specific,
//    // but not yet disentangled fully.
//    'shortcuts', 'dmauro_keypress', 'shortcuts_keybindings_default' (as default_shortcuts),
//
//    // Modules of TabFern itself
//    'view/const', 'view/item_details', 'view/sorts', 'view/item_tree',
//    'view/model',

// vi: set ts=4 sts=4 sw=4 et ai: //