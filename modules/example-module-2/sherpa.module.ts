import { SherpaJS } from "sherpa-core";
import { ExampleModule2 } from "./src";


export type Context = {
    exampleProperty: string,
    exampleNumber: number
}


export default SherpaJS.New.module({
    name: "example-module-2",
    interface: ExampleModule2
});

