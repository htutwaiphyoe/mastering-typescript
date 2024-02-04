export class Video {
  duration(): number {
    return 4;
  }
}

declare module "../lib/registry" {
  export interface DataTypeRegistry {
    video: Video;
  }
}
