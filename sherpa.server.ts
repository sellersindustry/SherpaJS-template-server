import { SherpaJS } from "sherpa-core";

export type Context = {
    foo: string
}

export default SherpaJS.New.server<Context>({
    context: {
        foo: "bar"
    }
});
