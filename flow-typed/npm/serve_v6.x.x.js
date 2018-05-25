// flow-typed signature: 3a875ff30db00905afa4168bed0ab1c0
// flow-typed version: 19ed93682b/serve_v6.x.x/flow_>=v0.54.x

declare module "serve" {
  declare type Options = {|
    auth?: boolean,
    cache?: number,
    clipless?: boolean,
    cors?: boolean,
    help?: boolean,
    ignore?: Array<string>,
    open?: boolean,
    port?: number,
    silent?: boolean,
    single?: boolean,
    ssl?: boolean,
    treeless?: boolean,
    unzipped?: boolean,
    version?: boolean
  |};

  declare type Result = {
    stop: () => void
  };

  declare export default function serve(
    directory: string,
    options: Options
  ): Result;
}
