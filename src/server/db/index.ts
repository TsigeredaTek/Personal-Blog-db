import * as mysql from 'mysql';
import config from '../config';
import Blogs from './blogs';

const Connection = mysql.createConnection(config.mysql);

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            console.log('executing mysql query');
            resolve(results);
        });
    });
};

export default {
    Blogs
}