import estimator from '../src/estimator';

const mockData = {
    region: { 
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71 
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 66622705,
    totalHospitalBeds: 1380614 
  }

const expectedOutput = {
  data: mockData,
  impact: {
    currentlyInfected: 6740,
    infectionsByRequestedTime: 3533701120,
    severeCasesByRequestedTime: 530055168,
    hospitalBedsByRequestedTime: -529571953,
    casesForICUByRequestedTime: 176685056,
    casesForVentilatorsByRequestedTime: 70674022,
    dollarsInFlight: 216286878
  },
  severeImpact: {
    currentlyInfected: 33700,
    infectionsByRequestedTime: 17668505600,
    severeCasesByRequestedTime: 2650275840,
    hospitalBedsByRequestedTime: -2649792625,
    casesForICUByRequestedTime: 883425280,
    casesForVentilatorsByRequestedTime: 353370112,
    dollarsInFlight: 1081434394
  }
};

describe('Covid-19 impact estimator', () => {
  describe('Should match expected output', () => {
    const { data, impact, severeImpact} = estimator(mockData);
    const { impact: expectedImpact, severeImpact: expectedsevereImpact } = expectedOutput;

    test('Should return the correct input data', () => {
      expect(data).toEqual(mockData);
    });

    // Tests for impacts
    test('Should match the expected impact for currently infected', () => {
      expect(impact.currentlyInfected).toEqual(expectedImpact.currentlyInfected);
    });

    test('Should match the expected impact for infections by requested time', () => {
      expect(impact.infectionsByRequestedTime).toEqual(expectedImpact.infectionsByRequestedTime);
    });

    test('Should match the expected impact for severe cases by requested time', () => {
      expect(impact.severeCasesByRequestedTime).toEqual(expectedImpact.severeCasesByRequestedTime);
    });

    test('Should match the expected impact for severe cases by requested time', () => {
      expect(impact.hospitalBedsByRequestedTime).toEqual(expectedImpact.hospitalBedsByRequestedTime);
    });

    test('Should match the expected impact for cases for ICU by requested time', () => {
      expect(impact.casesForICUByRequestedTime).toEqual(expectedImpact.casesForICUByRequestedTime);
    });

    test('Should match the expected impact for cases for ventilators by requested time', () => {
      expect(impact.casesForVentilatorsByRequestedTime).toEqual(expectedImpact.casesForVentilatorsByRequestedTime);
    });

    test('Should match the expected impact for dollars in flight', () => {
      expect(impact.dollarsInFlight).toEqual(expectedImpact.dollarsInFlight);
    });

    // Tests for Severe impacts
    test('Should match the expected severe impact for currently infected', () => {
      expect(severeImpact.currentlyInfected).toEqual(expectedsevereImpact.currentlyInfected);
    });

    test('Should match the expected severe impact for infections by requested time', () => {
      expect(severeImpact.infectionsByRequestedTime).toEqual(expectedsevereImpact.infectionsByRequestedTime);
    });

    test('Should match the expected severe impact for severe cases by requested time', () => {
      expect(severeImpact.severeCasesByRequestedTime).toEqual(expectedsevereImpact.severeCasesByRequestedTime);
    });

    test('Should match the expected severe impact for severe cases by requested time', () => {
      expect(severeImpact.hospitalBedsByRequestedTime).toEqual(expectedsevereImpact.hospitalBedsByRequestedTime);
    });

    test('Should match the expected severe impact for cases cases for ICU by requested time', () => {
      expect(severeImpact.casesForICUByRequestedTime).toEqual(expectedsevereImpact.casesForICUByRequestedTime);
    });

    test('Should match the expected severe impact for cases for ventilators by requested time', () => {
      expect(severeImpact.casesForVentilatorsByRequestedTime).toEqual(expectedsevereImpact.casesForVentilatorsByRequestedTime);
    });

    test('Should match the expected severe impact for dollars in flight', () => {
      expect(severeImpact.dollarsInFlight).toEqual(expectedsevereImpact.dollarsInFlight);
    });
  });
});