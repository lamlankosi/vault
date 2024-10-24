import {connection as db} from '../config/index.js'

class Data{
    fetchdata(req, res){
        try{
            const strQry= `
            SELECT ID, Username, Email, Category,Password
            FROM details
            `
            db.query(strQry, (err, results) =>{
                if(err) throw new Error('Unable to fetch details check database')
                    res.json({
                        status: res.statusCode,
                        results
                    })
            })
        } catch (e){
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    fetchInfo(req, res){
        try{
            const strQry= `
            SELECT ID, Username, Email, Category,Password
            FROM details
            WHERE ID = ${req.params.id};
            `
            db.query(strQry, (err, results) =>{
                if(err) throw new Error('Unable to fetch details check database')
                    res.json({
                        status: res.statusCode,
                        results
                    })
            })
        } catch (e){
            res.json({
                status:404,
                msg: e.message
            })
        }
    }
    deleteData(req,res){
        try{
            const strQry=`
            DELETE 
            FROM details
            WHERE ID =${req.params.id}`
            
            db.query(strQry, (err)=> {
                if(err) throw new Error('Unable to delete the data check database')
                    res.json({
                    status: res.statusCode,
                    msg: 'deleted successfully'
                    })
            })
        }catch(e){
            res.json({
                status:404,
                msg: e.message  
            })
        }
    }
    addData(req,res){
        try{
            let data = req.body
            const strQry=`
            INSERT INTO details
            SET ?
            `
            db.query(strQry, [data], (err) =>{
                if(err){
                    res.json({
                        status: res.statusCode,
                        msg: 'Failed to add try again'
                    })
                } else {
                    res.json({
                        msg: 'Added Successfully'
                    })
                }
            })
        }catch(e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    editData(req,res){
        try{
            let data = req.body
            const strQry=`
            UPDATE details
            SET ?
            WHERE ID= ${req.params.id}
            `
            db.query(strQry, [data], (err) =>{
                if(err) throw new Error('unable to edit data')
                    res.json({
                    status: res.statusCode,
                    msg: 'Data is updated'
                    })
            })
        }catch(e){
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
}

export{
    Data
}
