import { NewServer } from "sherpa-core";

export default NewServer({
    version: 1,
    app: {
        module: "./example-module",
        properties: {
            test: "hello world"
        }
    }
});