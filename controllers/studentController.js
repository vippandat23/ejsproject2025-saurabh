const Student = require('../models/Student');
const cloudinary = require('cloudinary').v2;
// exports.showStudentList = async (req, res) => {
//     try {
//         const students = await Student.find();
//         res.render('welcomeadmin', { students });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// };
async function addStudent(req, res) {
    try {
        // console.log(req.body, 'req.body');
        // console.log(req.file, 'req.file..');
        let result;
        if (req.file) {
            cloudinary.config({
                cloud_name: 'druxjpew7',
                api_key: '697567968539423',
                api_secret: '6jPDtK5eqdeRcSeCxXXvLTX-axs'
            })
             result = await cloudinary.uploader.upload(req.file.path);
            // console.log(result);
        }
        let student = await new Student(req.body);
        if (req.file) {
            student.studentImage = result.secure_url;
        }
        await student.save();
        // console.log("data base updated...");
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        });
    } catch (err) {
        console.log(err);
    }
};
async function deleteStudent(req, res) {
    try {
        let studentId = req.params._id;
        // console.log("studentId", studentId);
        await Student.deleteOne({ _id: studentId });
        let students = await Student.find({});
        res.render('welcomeadmin');
        students = students;
    } catch (err) {
        console.log(err);
    }
};
async function openStudentPage(req, res) {
    try {
        let studentId = req.params._id;
        let student = await Student.findOne({ _id: studentId });
        if (student) {
            res.render('studenteditpage', {
                student: student
            })
        } else {
            res.render('home');
        }
    } catch (err) {
        console.log(err);
    }

};
async function editStudent(req, res) {
    try {
        let studentId = req.params._id;
        // console.log(studentId + 'studentId');
        let student = await Student.findOne({ _id: studentId });
        if (student) {
            console.log(req.body, "req.body");
            student.rollNo = req.body.rollNo;
            student.studentName = req.body.studentName;
            student.fatherName = req.body.fatherName;
             student.motherName = req.body.motherName;
            student.course = req.body.course;
            student.branch = req.body.branch;
            student.yearOfAdmission = req.body.yearOfAdmission;
            await student.save();
            let students = await Student.find({});
            res.render('welcomeadmin', {
                students: students
            })
        } else {
            res.end('student not found');
        }
    } catch (err) {
        console.log(err)
    }

}



module.exports = {
    addStudent,
    deleteStudent,
    openStudentPage,
    editStudent,

}