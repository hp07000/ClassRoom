import * as readline from 'readline'
class InputReader {
    rl: readline.Interface| undefined = undefined;

    question(q:string, callback: (answer: string) => void){

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        this.rl.question(q, (ans: string)=>{         
            if (this.rl) {
            this.rl.close()
            }
            callback(ans)
        });

    }
}

export class QaSession {
    quetionBank: QuestionBank = new QuestionBank();
    instructor: Instructor = new Instructor();
    student: Student = new Student();
    date: Date = new Date();
    results: number = 0;
    start() {
        console.log("Exam started.");
        var ir = new InputReader()
        ir.question("What is the student name?", (studentName: string) => {
            this.student.name = studentName;
            console.log("Choose a subject.")
        })
        
    }
}

class QuestionBank {
    questionAnswers: QuestionAnswer[] = [];
    subject = "";
}

class QuestionBankService { 
    questionBankBySubject: Map <string, QuestionBank> = new Map()
    questionBank1 = new QuestionBank()
    questionBank2 = new QuestionBank()
    questionBank3 = new QuestionBank()
    questionBank4 = new QuestionBank()
    questionBank5 = new QuestionBank()
    constructor() {
        this.questionBank1.subject = "Math";
        this.questionBank2.subject = "Science";
        this.questionBank3.subject = "History";
        this.questionBank4.subject = "English";
        this.questionBank5.subject = "Arts";
        let questionAnswer = new QuestionAnswer();
        questionAnswer.question = "1. What is 1 + 1 ?";
        questionAnswer.answer = "b";
        questionAnswer.options = ["a. 11", "b. 2", "c. 3", "d. 111"]
    }
}
 
class QuestionAnswer {
    question: string = "";
    answer = "";
    options : string[] = [];
}

class Person {
    name: string = "";
    id = 0;
}

class Instructor extends Person  {
}

class Student extends Person {
}

var qaSession = new QaSession();

qaSession.start()

//complex type = captilized