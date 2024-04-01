import { ContextSchema, SherpaJS } from "sherpa-core";


export type Context = {
    exampleProperty: string,
    exampleNumber: number
}


export default SherpaJS.New.module({
    name: "example-module-1",
    interface: ContextSchema<Context>
});

