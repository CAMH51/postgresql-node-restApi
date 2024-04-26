import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'nodepg',
    password: 'ca850822',
    port: 5432
})