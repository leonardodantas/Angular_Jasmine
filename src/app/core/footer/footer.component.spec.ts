import { TestBed, async } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { RouterTestingModule } from "@angular/router/testing";
import { UserService } from "../user/user.service";
import { of } from 'rxjs'

describe("O component Footer", () => {

    let component: FooterComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [FooterComponent],
            providers: [UserService]
        }).compileComponents();
    }));

    beforeEach(() => {

        const fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        const userService = TestBed.get(UserService);
        spyOn(userService, "getUser").and.returnValue(of({
            email: 'leonardo@dantas.com',
            name: 'Leonardo Dantas',
            id: 1
        }));
    });

    it("Deve ser instanciado", () => {
        expect(component).toBeTruthy();
    });

});