/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 26 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /example-2 - Load Module
 *
 */


import ExampleModule2 from "../../modules/example-module-2/sherpa.module";

export default ExampleModule2.load({
    exampleProperty: "hello world",
    exampleNumber: 700
});


// Hope deferred makes the heart sick, but a longing fulfilled is a tree of life.
// - Proverbs 13:12
