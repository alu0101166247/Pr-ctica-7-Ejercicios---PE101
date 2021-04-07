/**
 * Clase para longitudes metricas
 */
export class MetricLength {
  /**
   * Constructor de la clase
   * @param length Longitud en Kilometros
   */
  constructor(private length: number) { }
  /**
   * Set de la variable base a Centimetros
   * @param length Centimetros
   */
  setlengthByCentimeters(length: number) {
    this.length = length / 100000;
  }
  /**
   * Get de la variable base en centimetros
   * @returns centimetros
   */
  getlengthByCentimeters(): number {
    return this.length * 100000;
  }
  /**
   * Set de la variable base a Metros
   * @param length Metros
   */
  setlengthByMeters(length: number) {
    this.length = length / 1000;
  }
  /**
   * get de la variable base a metros
   * @returns Metros
   */
  getlengthByMeters(): number {
    return this.length * 1000;
  }
  /**
   * Set de la variable base en kilometros
   * @param length Kilomentros
   */
  setlengthByKilometers(length: number) {
    this.length = length;
  }
  /**
   * Get de la variable base en Kilomentros
   * @returns Kilometros
   */
  getlengthByKilometers(): number {
    return this.length;
  }
}
