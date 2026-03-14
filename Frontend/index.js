const BASE_URL = 'http://localhost:8000';

let mode = 'CREATE';
let selectedId = null;

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);
    if (id) {
        mode = 'EDIT';
        selectedId = id;

        // 1.ดึงข้อมูลuser เก่าออกมาแสดง 

        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            console.log('response', response.data);
            const user = response.data
            // 2.จะนำข้อมูล user ที่ได้มาแสดงในฟอร์ม เพื่อให้ผู้ใช้แก้ไขข้อมูล
            let firstnameDOM = document.querySelector("input[name='firstname']");
            let lastnameDOM = document.querySelector("input[name='lastname']");
            let ageDOM = document.querySelector("input[name='age']");
            let descriptionDOM = document.querySelector("textarea[name='description']");

            firstnameDOM.value = user.firstname;
            lastnameDOM.value = user.lastname;
            ageDOM.value = user.age;
            descriptionDOM.value = user.description;

            let genderDoms = document.querySelectorAll('input[name=gender]');
            let interestDoms = document.querySelectorAll('input[name=interests]');

            for(let i = 0 ; i < genderDoms.length;i++){
                if (genderDoms[i].value == user.gender){
                    genderDoms[i].checked = true;
                }
            }
            for(let i = 0;i < interestDoms.length ; i++){
                if (user.interests.includes(interestDoms[i].value)){
                    interestDoms[i].checked = true;
                }
            }

        } catch (error) {
            console.log('error', error);
        }
    }
}

const vaildateData = (userData) => {

    let errors = [];
    if (!userData.firstname) {
        errors.push("กรุณากรอกชื่อ !!!");
    }
    if (!userData.lastname) {
        errors.push("กรุณากรอกนามสกุล !!!");
    }
    if (!userData.age) {
        errors.push("กรุณากรอกอายุ !!!");
    }
    if (!userData.gender) {
        errors.push("กรุณาเลือกเพศ !!!");
    }
    if (!userData.interests) {
        errors.push("กรุณาเลือกงานอดิเรก !!!");
    }
    if (!userData.description) {
        errors.push("กรุณากรอกคำอธิบาย !!!");
    }
    return errors;
}

const submitData = async () => {
    let firstnameDOM = document.querySelector("input[name='firstname']");
    let lastnameDOM = document.querySelector("input[name='lastname']");
    let ageDOM = document.querySelector("input[name='age']");
    let genderDOM = document.querySelector("input[name='gender']:checked") || {};
    let interestDOMs = document.querySelectorAll("input[name='interests']:checked") || {};
    let descriptionDOM = document.querySelector("textarea[name='description']");
    let messageDOM = document.getElementById('message');
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            firstname: firstnameDOM.value,
            lastname: lastnameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }

        console.log('submitData', userData);


        const errors = vaildateData(userData);
        if (errors.length > 0) {
            throw {
                message: "กรุณากรอกข้อมูลให้ครบถ้วน !!!",
                errors: errors
            }
        }

        let message = 'บันทึกข้อมูลสำเร็จ';

        if(mode == 'CREATE'){
            const response = await axios.post(`${BASE_URL}/users`, userData);
            console.log('response',response.data);
        }else{
            const response = await axios.put(`${BASE_URL}/users/$(selectdId)`, userData);
            message = 'แก้ไขข้อมูลสำเร็จ';
            console.log('response',response.data);
        }

        messageDOM.innerText = message;
        messageDOM.className = 'message success';

        const response = await axios.post(`${BASE_URL}/users`, userData)
        console.log('response', response);
        messageDOM.innerText = "บันทึกข้อมูลสำเร็จ";
        messageDOM.className = "message success";
    } catch (error) {
        console.log('error message', error.message);
        console.log('error', error.errors);
        let htmlData = '<div>'
        htmlData += `<div> ${error.message} </div>`;
        htmlData += '<ul>';
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li> ${error.errors[i]} </li>`;
        }
        if (error.response) {
            console.error('Error response:', error.response);
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        }
        htmlData += '</ul>';
        htmlData += '</div>';
        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
    }
}