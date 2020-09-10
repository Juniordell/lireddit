import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  type: "postgresql",
  debug: !__prod__,
  dbName: "lireddit",
  user: "postgres",
  password: "carros12",
} as Parameters<typeof MikroORM.init>[0];
