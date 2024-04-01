/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Apr 01 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /
 *
 */


import { Request, Response } from "sherpa-core";
import { Context } from "../sherpa.module";


export async function GET(request:Request, context:Context) {
    return Response.JSON({ request, context }, { status: 200 });
}


// Hope deferred makes the heart sick, but a longing fulfilled is a tree of life.
// - Proverbs 13:12
