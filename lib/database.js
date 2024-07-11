const db = require('better-sqlite3')('./db/database.db');
class Database {
  constructor(db) {
    this.db = db;
  }

  async get(key) {
    const value = await this.db.get(key);
    return value;
  }

  async set(key, value) {
    await this.db.set(key, value);
  }

  async delete(key) {
    await this.db.delete(key);
  }

  async list() {
    const keys = await this.db.list();
    return keys;
  }

  async clear() {
    await this.db.clear();
  }
}
module.exports = Database;