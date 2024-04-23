/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Apr 01 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: N/A
 *
 */


import { ModuleInterface } from "sherpa-core";


export type Context = {
    exampleProperty: string,
    exampleNumber: number
}


export class ExampleModule2 implements ModuleInterface<Context> {

    readonly context:Context;

    constructor(context:Context) {
        this.context = context;
    }


    getExampleNumber():number {
        return this.context.exampleNumber;
    }


}


// You are the light of the world. A town built on a hill cannot be hidden.
// - Matthew 5:14
