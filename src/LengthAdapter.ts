import {ImperialLength} from "./ImperialLength";
import {MetricLength} from "./MetricLength";
/**
 * Clase adaptador para medicas Imperiales en Metricas
 */
export class LengthAdapter extends MetricLength {
  /**
     * Constructor de la clase
     * @param imperial Objeto de tipo imperial
     */
  constructor(private imperial: ImperialLength) {
    super(imperial.getlengthByMiles());
  }
  /**
   * Get de la medida en centimetros
   * @returns Centimetros
   */
  getlengthByCentimeters(): number {
    return this.imperial.getlengthByMiles() * 160934;
  }
  /**
   * Get de la medida en metros
   * @returns Metros
   */
  getlengthByMeters(): number {
    return this.imperial.getlengthByMiles() * 1609.34;
  }
  /**
   * Get de la medida en Kilometros
   * @returns Kilometros
   */
  getlengthByKilometers(): number {
    return this.imperial.getlengthByMiles() * 1.60934;
  }
}
