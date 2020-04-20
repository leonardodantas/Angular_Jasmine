import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { PhotoService } from "./photo.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Photo } from "./photo.model";

describe("Serviço de PHOTOSERVICE", () => {

    let photoService: PhotoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PhotoService],
            imports: [HttpClientTestingModule]
        })
        photoService = TestBed.get(PhotoService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it("deve ser instanciando", () => {
        expect(photoService).toBeTruthy();
    });

    it("deve retornar uma photo pelo ID", fakeAsync(() => {
        let fakePhoto = {
            id: 2
        }
        
        photoService.findById(1).subscribe(
            response => expect(response.id).toBe(fakePhoto.id)
        )

        const request = httpMock.expectOne((req) => req.method === 'GET')

        request.flush(fakePhoto);

        tick();
    }));
});