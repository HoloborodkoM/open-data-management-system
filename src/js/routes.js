const { Router, query } = require("express");
const mysql = require('mysql2/promise');
const { extend } = require('lodash');

const connectionUrl = 'mysql://root:@localhost:3306/opendatamanagementsystem';

const sql = {
    createDataFile: `INSERT INTO DATAFILE(ID, NAME, DESCRIPTION, FILE_CSV, UPLOADDATE, HASGRAPH, CATEGORY_ID) VALUES (:id, :name, :description, :file_csv, :uploadDate, :hasGraph, :category_id)`,
    readDataFileByID: `SELECT * FROM DATAFILE WHERE ID= :id`,
    readDataFiles: `SELECT * FROM DATAFILE`,
    updateDataFileByID: `UPDATE DATAFILE SET NAME= :name, DESCRIPTION= :description, FILE_CSV= :file_csv, CATEGORY_ID= :category_id WHERE ID= :id`,
    deleteDataFileByID: `DELETE FROM DATAFILE WHERE ID= :id`,
};

const executeSQL = async (query, values) => {
    let connection;
    let sqlStatement;
    try {
        connection = await mysql.createConnection({
            uri: connectionUrl,
            password: 'sX18rzX*4#Lw',
            namedPlaceholders: true
        });
        sqlStatement = await connection.format(query, values);

        const [results, fields] = await connection.execute(sqlStatement);
        return results;
    } catch (err) {
        throw new Error(`SQL: ${sqlStatement} - ${err.toString()}`);
    } finally {
        if (connection) connection.end();
    }
};

const router = Router();

router.post('/:id', async (req, res) => {
    try {
        const values = extend({}, req.body, req.params);
        console.log(values);
        console.log(typeof (values));
        for (const isEmptyField in values) {
            const informationField = values[isEmptyField];
            if (informationField === '') {
                res.status(404).json("Can't be empty fields");
            }
        }
        let result = await executeSQL(sql.createDataFile, values);
        result = await executeSQL(sql.readDataFileByID, req.params);
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send({
            status: 500,
            error: err.toString()
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await executeSQL(sql.readDataFiles);
        if (result.length === 0) {
            res.status(404).json('No one file in base');
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        return res.status(500).send(err.toString());
    }
});

router.get('/:id', async (req, res) => {
    try {
        const result = await executeSQL(sql.readDataFileByID, req.params);
        if (result.length === 0) {
            res.status(404).json('No such file exists');
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        return res.status(500).send(err.toString());
    }
});

router.put('/:id', async (req, res) => {
    try {
        const values = extend({}, req.body, req.params);
        for (const isEmptyField in values) {
            const informationField = values[isEmptyField];
            if (informationField === '') {
                res.status(404).json("Can't be empty fields");
            }
        }
        let result = await executeSQL(sql.updateDataFileByID, values);
        result = await executeSQL(sql.readDataFileByID, req.params);
        if (result.length === 0) {
            res.status(404).json('No such file to change');
        } else {
            res.status(200).send(result);
        }
    } catch (err) {
        return res.status(500).send(err.toString());
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const result = await executeSQL(sql.readDataFileByID, req.params);
        if (result.length === 0) {
            res.status(404).json("File can't be delete, isn't in the database");
        } else {
            res.status(200).send(result);
        }
        await executeSQL(sql.deleteDataFileByID, req.params);
        res.status(200).send(result);
    } catch (err) {
        return res.status(500).send(err.toString());
    }
});

module.exports = router;