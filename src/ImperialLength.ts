/**
 * Clase para longitudes imperiales
 */
export class ImperialLength {
  /**
   * Constructor de la clase
   * @param length Longitud en Millas
   */
  constructor(private length: number) { }
  /**
   * Set en pulgadas
   * @param length pulgadas
   */
  setlengthByInches(length: number) {
    this.length = length / 63360;
  }
  /**
   * Get en pulgadas
   * @returns pulgadas
   */
  getlengthByInches(): number {
    return this.length * 63360;
  }
  /**
   * Set en pies
   * @param length pies
   */
  setlengthByFeets(length: number) {
    this.length = length / 5280;
  }
  /**
   * Get en pies
   * @returns pies
   */
  getlengthByFeets(): number {
    return this.length * 5280;
  }
  /**
   * Set en yardas
   * @param length yardas
   */
  setlengthByYards(length: number) {
    this.length = length / 1760;
  }
  /**
   * Get en yardas
   * @returns yardas
   */
  getlengthByYards(): number {
    return this.length * 1760;
  }
  /**
   * Set en Millas
   * @param length Millas
   */
  setlengthByMiles(length: number) {
    this.length = length;
  }
  /**
   * get en millas
   * @returns millas
   */
  getlengthByMiles(): number {
    return this.length;
  }
}
