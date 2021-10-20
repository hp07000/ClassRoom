"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QaSession = void 0;
const readline = __importStar(require("readline"));
class InputReader {
    constructor() {
        this.rl = undefined;
    }
    question(q, callback) {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.rl.question(q, (ans) => {
            if (this.rl) {
                this.rl.close();
            }
            callback(ans);
        });
    }
}
class QaSession {
    constructor() {
        this.quetionBank = new QuestionBank();
        this.instructor = new Instructor();
        this.student = new Student();
        this.date = new Date();
        this.results = 0;
    }
    start() {
        console.log("Exam started.");
        var ir = new InputReader();
        ir.question("What is the student name?", (studentName) => {
            this.student.name = studentName;
            console.log("Choose a subject.");
        });
    }
}
exports.QaSession = QaSession;
class QuestionBank {
    constructor() {
        this.questionAnswers = [];
        this.subject = "";
    }
}
class QuestionBankService {
    constructor() {
        this.questionBankBySubject = new Map();
        this.questionBank1 = new QuestionBank();
        this.questionBank2 = new QuestionBank();
        this.questionBank3 = new QuestionBank();
        this.questionBank4 = new QuestionBank();
        this.questionBank5 = new QuestionBank();
        this.questionBank1.subject = "Math";
        this.questionBank2.subject = "Science";
        this.questionBank3.subject = "History";
        this.questionBank4.subject = "English";
        this.questionBank5.subject = "Arts";
        let questionAnswer = new QuestionAnswer();
        questionAnswer.question = "1. What is 1 + 1 ?";
        questionAnswer.answer = "b";
        questionAnswer.options = ["a. 11", "b. 2", "c. 3", "d. 111"];
    }
}
class QuestionAnswer {
    constructor() {
        this.question = "";
        this.answer = "";
        this.options = [];
    }
}
class Person {
    constructor() {
        this.name = "";
        this.id = 0;
    }
}
class Instructor extends Person {
}
class Student extends Person {
}
var qaSession = new QaSession();
qaSession.start();
//complex type = captilized
