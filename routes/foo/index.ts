/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 26 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /foo - Load Module
 *
 */

import { SherpaJS } from "sherpa-core";
import { ContextSchema } from "../../modules/example-module/sherpa.module";


export default SherpaJS.Load.module<ContextSchema>({
    entry: "../../modules/example-module",
    context: {
        exampleProperty: "hello world",
        exampleNumber: 200
    }
});


// Hope deferred makes the heart sick, but a longing fulfilled is a tree of life.
// - Proverbs 13:12
