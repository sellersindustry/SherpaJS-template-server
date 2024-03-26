import { SherpaJS } from "sherpa-core";

export default SherpaJS.New.module({
    name: "example-module",
});


export type ContextSchema = {
    exampleProperty: string,
    exampleNumber: number
}
