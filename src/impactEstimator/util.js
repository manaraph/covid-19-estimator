
const computeCurrentlyInfected = ({ reportedCases }, impactFactor) => reportedCases * impactFactor;

module.exports = {
  computeCurrentlyInfected,

}