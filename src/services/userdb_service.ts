/* if(! fs.existsSync(userDatabasePath)) {
    console.log('creando..')
    let db = new Database(userDatabasePath);
    const stmt = db.prepare('CREATE TABLE IF NOT EXISTS contacts (contact_id INTEGER PRIMARY KEY, first_name TEXT NOT NULL,last_name TEXT NOT NULL,email TEXT NOT NULL UNIQUE,phone TEXT NOT NULL UNIQUE);'
    );
    stmt.run();
    const stmt2 = db.prepare("INSERT INTO contacts (contact_id, first_name, last_name, email, phone) VALUES (1,'Iván','Larios','aasu@','5534135423');")
    stmt2.run();
    const stmt3 = db.prepare('SELECT * FROM contacts;')
    console.log(stmt3.all());

} else {
    console.log('consultando..')
    let db = Database(userDatabasePath);
    
    const stmt2 = db.prepare("INSERT INTO contacts (contact_id, first_name, last_name, email, phone) VALUES (2,'Edgar','Cano','au@','555423');")
    stmt2.run();

    const stmt3 = db.prepare('SELECT * FROM contacts;')
    console.log(stmt3.all());
} */