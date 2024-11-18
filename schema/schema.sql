CREATE TABLE IF NOT EXISTS status (
  id INTEGER PRIMARY KEY,
  state VARCHAR(12) NOT NULL CHECK (state = 'deleted'),
  created INTEGER DEFAULT (strftime('%s', 'now')),
  UNIQUE (id, state)
);

CREATE TABLE IF NOT EXISTS url (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  value TEXT UNIQUE NOT NULL,
  created INTEGER DEFAULT (strftime('%s', 'now'))
);

CREATE VIEW IF NOT EXISTS urls AS
  SELECT DISTINCT * FROM url
  WHERE NOT EXISTS (SELECT id FROM status WHERE url.id = status.id)
