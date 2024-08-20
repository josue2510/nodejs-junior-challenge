/**
 * @typedef {Object} Call
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 */

/**
 * @typedef {Object} ProcessedCall
 * @property {string} identifier - Call's identifier
 * @property {string} type - Call's type
 * @property {number} duration - Call's duration
 * @property {number} callCost - Call's cost
 */

/**
 * @typedef {Object} CallsResponse
 * @property {number} totalCalls - Number of processed calls
 * @property {number} total - Total to pay including all the processed calls
 * @property {ProcessedCall[]} callsDetails - Processed information about calls
 */

/** 
 * Design a solution to calculate what to pay for a set of phone calls. The function must receive an 
 * array of objects that will contain the identifier, type and duration attributes. For the type attribute, 
 * the only valid values are: National, International and Local
 * 
 * The criteria for calculating the cost of each call is as follows:
 * 
 * International: first 3 minutes $ 7.56 -> $ 3.03 for each additional minute
 * National: first 3 minutes $ 1.20 -> $ 0.48 per additional minute
 * Local: $ 0.2 per minute.
 * 
 * The function must return the total calls, the details of each call (the detail received + the cost of the call) 
 * and the total to pay taking into account all calls
 * 
 * @param {Call[]} calls - Call's information to be processed
 * 
 * @returns {CallsResponse}  - Processed information
*/

function callsCost(calls) {
  const callsDetails = calls.reduce((acc, curr) => {
    if (curr.type.includes('National') || curr.type.includes('International') || curr.type.includes('Local')) {
      const costByType = {
        International: { fst: 7.56, rst: 3.03 },
        National: { fst: 1.20, rst: 0.48 },
        Local: { fst: 0.2, rst: 0.2 },
      };
    
      const callCost = curr.duration >= 3 
        ? (3 * costByType[curr.type].fst) + (curr.duration - 3) * costByType[curr.type].rst
        : curr.duration * costByType[curr.type].fst;

      const callDetail = {
        identifier: curr.identifier,
        type: curr.type,
        duration: curr.duration,
        callCost: +callCost.toFixed(2),
      };

      acc.totalCalls += 1;
      acc.total += callDetail.callCost;
      acc.callsDetails.push(callDetail);

      acc.total = +acc.total.toFixed(2);

      return acc;
    }

    return acc;
  }, { totalCalls: 0, total: 0, callsDetails: [] });

  return callsDetails;
}

module.exports = callsCost;
