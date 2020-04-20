import { AuthService } from "./auth.service";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { UserService } from "../user/user.service";

describe('O serviço AuthService', () => { 

    let service: AuthService;
    let httpMock: HttpTestingController;
    let userService: UserService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [AuthService],
            imports: [HttpClientTestingModule]
        });
        service = TestBed.get(AuthService);
        httpMock = TestBed.get(HttpTestingController);
        userService = TestBed.get(UserService);
    });

    it("Deve ser instanciado", () => {
        expect(service).toBeTruthy();
    });

    it("Deve autenticar o usuario", fakeAsync(() => {
        const fakeBody = {
            id: 1,
            nome: 'Leonardo',
            email: 'leonardo@dantas.com'
        };

        const spy = spyOn(userService, "setToken").and.returnValue(null);

        service.authenticate('Leonardo', '1234').subscribe(
            response => {
                expect(response.body).toEqual(fakeBody);
                expect(spy).toHaveBeenCalledWith("tokenTest");
            }
        );

        const request = httpMock.expectOne((req) => {
            return req.method === 'POST';
        });

        request.flush(fakeBody, {
            headers: { 'x-access-token': "tokenTest" }
        });

        tick();
    }));
});