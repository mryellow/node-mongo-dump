export type Arguments = {
  dbName: string;
  frequency?: string;
  nbSaved?: number;
  host?: string;
  port?: string;
  uri?: string;
  outPath?: string;
  compress?: boolean;
  withStdout?: boolean;
  withStderr?: boolean;
  withClose?: boolean;
};
