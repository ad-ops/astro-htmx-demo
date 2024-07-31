import { createClient } from "@libsql/client";

export const turso = createClient({
    url: ":memory:",
});

turso.execute("CREATE TABLE IF NOT EXISTS counter (counter INTEGER NOT NULL DEFAULT 0);");
