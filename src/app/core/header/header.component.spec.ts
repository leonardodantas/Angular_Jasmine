import { async, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { UserService } from "../user/user.service";
import { RouterTestingModule } from "@angular/router/testing";
import { MenuModule } from "src/app/shared/componets/menu/menu.module";
import { AlertModule } from "src/app/shared/componets/alert/alert.module";
import { LoadingModule } from "src/app/shared/componets/loading/loading.module";
import { of } from "rxjs";
import { Router } from "@angular/router";

describe("O component HEADER", () => {

    //criar variaveis para o teste
    let headerComponent: HeaderComponent;
    let userService: UserService;
    let router: Router;

    //preparar moduloes e providers que serão necessarios para se ter sucesso nos testes
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [RouterTestingModule.withRoutes([]), MenuModule, AlertModule, LoadingModule],
            providers: [UserService]
        }).compileComponents();
    }));

    //inicializar variaveos
    beforeEach(()=>{
        userService = TestBed.get(UserService);
        router = TestBed.get(Router);
        spyOn(userService, "getUser").and.returnValue(of({
            name: 'Leonardo',
            email: 'leonardo@dantas.com',
            id: 1
        }));

        //inicializar components
        const fixture = TestBed.createComponent(HeaderComponent);
        headerComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Deve instanciar component", () => {
        expect(headerComponent).toBeTruthy();
    });

    it("Deve fazer o logout", ()=>{
        //ao executar a função logout o resultado será nuill
        const spy = spyOn(userService, "logout").and.returnValue(null);
        
        //pegar ação ao relizar o navigate de router
        const navigateSpy = spyOn(router, 'navigate');

        //executar o metodo a ser testado
        headerComponent.logout();

        //função executada sem retorno
        expect(spy).toHaveBeenCalled();

        //função executada indo para o seu resultado
        expect(navigateSpy).toHaveBeenCalledWith([""]);
    });
});