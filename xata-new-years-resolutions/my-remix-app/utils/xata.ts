// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "resolutions",
    columns: [
      { name: "year", type: "int", notNull: true, defaultValue: "2023" },
      {
        name: "resolution",
        type: "string",
        notNull: true,
        defaultValue: "My resolution",
      },
      {
        name: "isCompleted",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "user", type: "link", link: { table: "users" } },
    ],
  },
  {
    name: "users",
    columns: [
      { name: "email", type: "email", unique: true },
      { name: "password", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Resolutions = InferredTypes["resolutions"];
export type ResolutionsRecord = Resolutions & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  resolutions: ResolutionsRecord;
  users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://bradgarropy-s-workspace-8eg8mm.us-east-1.xata.sh/db/new-years-resolutions",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
