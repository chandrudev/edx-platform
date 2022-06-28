/*
Drop all Mongo test databases.

Usage example:

    mongo delete-mongo-test-dbs.js

will drop every database that starts with "test_" or "acceptance_",
but ignore other databases.
*/


String.prototype.startsWith = function(substring) {
<<<<<<< HEAD
    return (this.indexOf(substring) == 0);
=======
    return (this.indexOf(substring) === 0);
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
};

var dbNameList = db.getMongo().getDBNames();
for (var i in dbNameList) {
    if (dbNameList[i].startsWith('test_') || dbNameList[i].startsWith('acceptance_')) {
        dbToDrop = db.getMongo().getDB(dbNameList[i]);
        print('Dropping test db ' + dbNameList[i]);
        dbToDrop.dropDatabase();
    }
}
