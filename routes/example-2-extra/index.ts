/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 31 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /example-2-extra - Load Module Interface
 *
 */


import { Request, Response } from "sherpa-core";
import { Context } from "../../sherpa.server";
import ExampleModule2 from "../example-2";

export async function GET(request:Request, context:Context) {
    return Response.text(ExampleModule2.getExampleNumber().toString(), { status: 200 });
}


// My son, if your heart is wise, then my heart will be glad indeed.
// - Proverbs 23:15
