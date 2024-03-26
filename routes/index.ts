/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Sun Mar 26 2024
 *   file: index.ts
 *   project: SherpaJS Template Module
 *   purpose: Endpoint /
 *
 */


import { Request, Response, Context } from "sherpa-core";


export async function GET(request:Request, context:Context) {
    return Response.JSON({ request, context }, { status: 200 });
}


export async function POST(request:Request, context:Context) {
    return Response.JSON({ request, context }, { status: 200 });
}


export async function PATCH(request:Request, context:Context) {
    return Response.text("PATCH REQUEST");
}


export async function DELETE(request:Request, context:Context) {
    return Response.new({ status: 200 });
}


// "For in him we live and move and have our being."" As some of your own
// poets have said, "We are his offspring."
// - Acts 17:28
