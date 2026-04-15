declare module 'hls.js' {
  export default class Hls {
    static isSupported(): boolean;
    loadSource(src: string): void;
    attachMedia(media: HTMLMediaElement): void;
    destroy(): void;
    on(event: string, callback: (...args: any[]) => void): void;
    off(event: string, callback: (...args: any[]) => void): void;
  }
}
