/* eslint-disable max-len */
import 'mocha';
import {expect} from 'chai';
import {ImperialLength} from "../src/ImperialLength";
import {LengthAdapter} from "../src/LengthAdapter";
import {MetricLength} from '../src/MetricLength';

const metricLength: MetricLength = new MetricLength(1);
metricLength.setlengthByCentimeters(250);
metricLength.setlengthByKilometers(250);
metricLength.setlengthByMeters(250);

const imperialLength: ImperialLength = new ImperialLength(1);
imperialLength.setlengthByInches(50);
imperialLength.setlengthByMiles(50);
imperialLength.setlengthByYards(50);
imperialLength.setlengthByFeets(50);

const adapterLength: LengthAdapter = new LengthAdapter(imperialLength);

describe('Pruebas para las medidas Imperiales', () => {
  it('imperialLength.getlengthByFeets() returns value 50', () => {
    expect(imperialLength.getlengthByFeets()).to.be.equal(50);
  });
  it('imperialLength.getlengthByInches() returns value 600', () => {
    expect(imperialLength.getlengthByInches()).to.be.equal(600);
  });
  it('imperialLength.getlengthByMiles() returns value 0.00946969696969697', () => {
    expect(imperialLength.getlengthByMiles()).to.be.equal(0.00946969696969697);
  });
  it('imperialLength.getlengthByYards() returns value 16.666666666666668', () => {
    expect(imperialLength.getlengthByYards()).to.be.equal(16.666666666666668);
  });
});

describe('Pruebas para las medidas Metricas', () => {
  it('metricLength.getlengthByCentimeters() returns value 25000', () => {
    expect(metricLength.getlengthByCentimeters()).to.be.equal(25000);
  });
  it('metricLength.getlengthByKilometers() returns value 0.25', () => {
    expect(metricLength.getlengthByKilometers()).to.be.equal(0.25);
  });
  it('metricLength.getlengthByMeters() returns value 250', () => {
    expect(metricLength.getlengthByMeters()).to.be.equal(250);
  });
});

describe('Pasar 50 pies de Imperial a unidades Metricas', () => {
  it('adapterLength.getlengthByCentimeters() returns value 1523.9962121212122', () => {
    expect(adapterLength.getlengthByCentimeters()).to.be.equal(1523.9962121212122);
  });
  it('adapterLength.getlengthByMeters() returns value 15.239962121212121', () => {
    expect(adapterLength.getlengthByMeters()).to.be.equal(15.239962121212121);
  });
  it('adapterLength.getlengthByKilometers() returns value 0.015239962121212121', () => {
    expect(adapterLength.getlengthByKilometers()).to.be.equal(0.015239962121212121);
  });
});
