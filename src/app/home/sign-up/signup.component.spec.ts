import { async, TestBed } from "@angular/core/testing";
import { SignUpComponent } from "./signup.component";
import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { VMessageModule } from "src/app/shared/componets/vmessage/vmessage.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { of, throwError } from "rxjs";

describe("O formulario SIGNUP", () => {

    let component: SignUpComponent;
    let router: Router;
    let service: SignUpService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignUpComponent],
            providers: [SignUpService, UserNotTakenValidatorService],
            imports: [HttpClientTestingModule, VMessageModule, ReactiveFormsModule, RouterTestingModule.withRoutes([])]
        }).compileComponents();
    }));

    beforeEach(()=>{
        service = TestBed.get(SignUpService);
        router = TestBed.get(Router);
        const fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("Deve instanciar o component", ()=>{
        expect(component).toBeTruthy();
    });

    it("Deve cadastrar um usuario", ()=>{
        const navigateSpy = spyOn(router, "navigate");
        spyOn(service, "signup").and.returnValue(of(null))
        component.signupForm.get('email').setValue('leonardo@dantas.com');
        component.signupForm.get('fullName').setValue('leonardo');
        component.signupForm.get('userName').setValue('leonardo');
        component.signupForm.get('password').setValue('123');
        component.signUp();

        expect(navigateSpy).toHaveBeenCalledWith([""]);
    });

    /*it("Deve realizar o log caso ocorra algum erro", ()=>{
        spyOn(service,"signup").and.returnValue(throwError("Erro de servidor"));
        
        component.signupForm.get('email').setValue('leonardo@dantas.com');
        component.signupForm.get('fullName').setValue('leonardo');
        component.signupForm.get('userName').setValue('leonardo');
        component.signupForm.get('password').setValue('123');

        component.signUp();
        const spyLog = spyOn(console, "log");
        expect(spyLog).toHaveBeenCalledWith(["Erro de servidor"]);
    });*/
});