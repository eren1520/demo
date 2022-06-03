import {kiemTraRong, kiemTraMail, kiemTraPhone} from './main.js'
const expect = chai.expect;

describe('function kiemTraRong()', () => {
    it('should be false if ""',() =>{
        const resul = kiemTraRong("");
        expect(resul).to.be.false;
    });

    it('should be false if khoi',() =>{
        const resul = kiemTraRong("khoi");
        expect(resul).to.be.false;
    });
});

describe('function kiemTraMail()', () => {
    it('should be true if ""',() =>{
        const resul = kiemTraMail("");
        expect(resul).to.be.true;
    });

    it('should be true if khoi',() =>{
        const resul = kiemTraMail("khoi");
        expect(resul).to.be.true;
    });

    it('should be true if khoi@gmail.com',() =>{
        const resul = kiemTraMail("khoin@gmail.com");
        expect(resul).to.be.true;
    });
});

describe('function kiemTraPhone()', () => {
    it('should be true if ""',() =>{
        const resul = kiemTraPhone("");
        expect(resul).to.be.true;
    });

    it('should be true if khoi',() =>{
        const resul = kiemTraPhone("khoi");
        expect(resul).to.be.true;
    });

    it('should be true if 0',() =>{
        const resul = kiemTraPhone(0);
        expect(resul).to.be.true;
    });
});