import { UserService } from "./user.service";
import { TokenService } from "../token/token.service";
import { TestBed } from "@angular/core/testing";

describe('O serviço User Service', ()=>{

    let userService: UserService;
    
        beforeEach(()=>{
           // userService = new UserService(new TokenService());
           TestBed.configureTestingModule({
               providers: [UserService]
           });
           userService = TestBed.get(UserService);
        });

    it('O serviço UserService deve ser instanciado', ()=>{
        expect(userService).toBeTruthy();
    });

    it("Deve atraves de um token, recuperar as informações do usuario", ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4NzMzODM5MCwiZXhwIjoxNTg3NDI0NzkwfQ.IMAjFObfGWJ6dDXsoJ0l7wkBOLOBRbxuOC_UQtOA8Yo";

        userService.setToken(token);
        expect(userService.isLogged()).toBeTruthy();
        expect(userService.getUserName()).toBe('flavio');
        userService.getUser().subscribe(
            (user)=>  expect(user.name).toBe('flavio')
        )
    });

    it("Deve limpar as informações no Logout", ()=>{
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImZsYXZpbyIsImVtYWlsIjoiZmxhdmlvQGFsdXJhcGljLmNvbS5iciIsImlhdCI6MTU4NzMzODM5MCwiZXhwIjoxNTg3NDI0NzkwfQ.IMAjFObfGWJ6dDXsoJ0l7wkBOLOBRbxuOC_UQtOA8Yo";
        userService.setToken(token);
        userService.logout();
        
        expect(userService.isLogged()).toBeFalsy();
        expect(userService.getUserName()).toBeFalsy();
    });
});