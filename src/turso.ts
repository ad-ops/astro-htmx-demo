import { createClient } from "@libsql/client";

export const turso = createClient({
    url: ":memory:",
});

await turso.execute("CREATE TABLE IF NOT EXISTS counters (id INTEGER PRIMARY KEY ASC, counter INTEGER NOT NULL DEFAULT 0);");
await turso.execute("INSERT INTO counters (counter) VALUES (0);");