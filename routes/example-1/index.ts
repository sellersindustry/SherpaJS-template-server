/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 26 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /example-1 - Load Module
 *
 */


import ExampleModule1 from "../../modules/example-module-1/sherpa.module";

export default ExampleModule1.load({
    exampleProperty: "hello world",
    exampleNumber: 200
});


// Hope deferred makes the heart sick, but a longing fulfilled is a tree of life.
// - Proverbs 13:12
