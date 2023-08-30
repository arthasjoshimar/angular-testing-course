import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe('CalculatorService', () => {

    it('should add two numbers', () => {
        const logger = jasmine.createSpyObj("LoggerService",["log"]);
        // si el metodo log retornara un valor, podemos mockear este retorno de valor:
        logger.log.and.returnValue(2); //TODO: en los parentesis se mockearia el retorno.

        
        const valor = logger.log();
        console.log("Valor ", valor);
        

        const calculator = new CalculatorService(logger);
        const result = calculator.add(2, 2);
        expect(result).toBe(4);
        // expect(logger.log).toHaveBeenCalledTimes(1);
        
    });

    it('should subtract two numbers', () => {
        const calculator = new CalculatorService(new LoggerService());
        const result = calculator.subtract(2, 2);
        expect(result).toBe(0, "Unexpected subtraction result");
    });

});