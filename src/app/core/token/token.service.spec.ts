import { TokenService } from "./token.service";

describe('O serviço TokenService', () => {
    
    let service;
    let token;

    it('deve ser instanciado', () => {
             expect(service).toBeTruthy();
    });

    it('deve guardar um token', () => {
       
        service.setToken(token);
        expect(service.hasToken()).toBeTruthy();
        expect(service.getToken()).toBe('testetoken');
    });

    it('deve remover um token', ()=>{

        service.setToken(token);
        service.removeToken();
        expect(service.hasToken()).toBeFalsy();
        expect(service.getToken()).toBeFalsy();

        
    });

    beforeEach(()=>{
        token = 'testetoken';
        service = new TokenService();
    });

    afterEach(()=>{
        localStorage.clear();
    });
});