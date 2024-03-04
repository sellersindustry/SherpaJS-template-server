import { Environment, Response } from "sherpa-core";

export function GET(request:Request, env:Environment) {
    return Response({
        "foo": 200,
        "example": env.GetProperties()["test"]
    });
}