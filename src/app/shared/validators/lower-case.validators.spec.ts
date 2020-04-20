import { isLowerCase } from "./lower-case.validator";

describe('A função isLowerCase', () => {
    it('deve confirmar quando recebe um texto em caixa baixa', () => {
        const valor = "leonardo";
        const resultado = isLowerCase(valor);
        expect(resultado).toBeTruthy();
    });

    it('deve validar quando o valor enviado não for caixa baixa', () =>
        expect(isLowerCase('Leonardo')).toBeFalsy()
    );
});
