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
  },
  severeImpact: {
    currentlyInfected: 33700,
    infectionsByRequestedTime: 17668505600,
    severeCasesByRequestedTime: 2650275840,
    hospitalBedsByRequestedTime: -2649792625,
  }
};

describe('Covid-19 impact estimator', () => {
  describe('Should match expected output', () => {
    const { data, impact, severeImpact} = estimator(mockData);
    console.log(impact);
    console.log(severeImpact);
    
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
  });
});