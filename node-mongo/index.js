const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';

MongoClient.connect(url, (err,client)=>{
    assert.equal(err,null);
    console.log("Connected to a server");
    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne({"name":"Chowmein", "origin":"China"}, (err,result)=>{
        assert.equal(err,null);
        console.log("Insertion Done.\n");
        console.log(result.ops);
        collection.find({}).toArray((err,docs)=>{
            assert.equal(err,null);
            console.log("Found");
            console.log(docs);

            db.dropCollection('dishes', (err,result)=>{
                assert.equal(err,null);
                client.close();
            })
        });
    });
});