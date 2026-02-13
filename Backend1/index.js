const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
let users = [];
let counter = 1;

app.use(bodyParser.json());
/**
 GET / users -ดึงข้อมูลผู้ใช้ทั้งหมด
 Post / users -เพิ่มผู้ใช้ใหม่
 GET /users/:id - ดึงข้อมูลผู้ใช้ตาม ID
 PUT /users/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
 DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
 */

//path: = GET / users 
app.get('/users',(req,res) =>{
    res.json(users);
});

//path: = Post/User
app.post('/user',(req,res) =>{
    let user = req.body;
    user.id = counter
    counter += 1;

    users.push(user);
    res.json({
    message: 'User added successfully!',
    user: user
    });
});

//path: = Put/user/:id
app.patch('/user/:id',(req,res) => {
    let id = req.params.id;
    let updateUser = req.body;
    
    //หาUser จาก ID ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id == id);

    //อัพเดตข้อมูล Users
    users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;
    
    if (updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
     if (updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }

    res.json({
        message: 'User update sucessfully!',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    })
    //ส่ง users ที่อัพเดทแล้วกลับไป
})

app.delete('/users/:id',(req,res) => {
    let id = req.params.id;
    //หา index จาก id ที่ต้องการลบ
        let selectedIndex = users.findIndex(user => user.id == id);
    //ลบ user ออกจาก users
    users.splice(selectedIndex,1);
    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    })
});

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});