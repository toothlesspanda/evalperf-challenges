const algorithm = require('./algorithm');
const fs = require('fs');

const NAME_FILE = './testPerformance.txt'
const results = []
const ALGORITHM_NAME= "Find pair for the sum"
describe(`${ALGORITHM_NAME} |`, () => {
  let hrstart = null

  beforeAll(()=>{
    results.push({ALGORITHM_NAME:[]})
    fs.writeFileSync(NAME_FILE, `Find pair for the sum\n`)})

  beforeEach( ()=>{
    hrstart = process.hrtime()
  })

  afterEach(()=>{
    const testName =  expect.getState().currentTestName
    console.log(testName.split("|"))
    
    console.log(results[ALGORITHM_NAME])
    // let hrend = process.hrtime(hrstart)
    // let content = `Execution time for \n ${testName} ${hrend[1] / 1000000}ms`
    // fs.appendFileSync(NAME_FILE, content);

  })

  // afterAll(()=>{
  //   const testName =  expect.getState().currentTestName
  //   let hrend = process.hrtime(hrstart)
  //   fs.writeFileSync('/Users/joe/test.txt', content);
  //   console.info(`Execution time for \n ${testName} ${hrend[1] / 1000000}ms`)
  // })

  describe('([0,1,3,5,1,4], 2) => [1,1] |', () =>{
    let pairArray = [0,1,3,5,1,4]
    let sum = 2
    let expectedResult = [1,1]

    it('basicSolution |', () => {
      expect(algorithm.basicSolution(pairArray, sum)).toEqual(expect.arrayContaining(expectedResult));
    });

    it('basicSolutionSorted |', () => {
      expect(algorithm.basicSolutionSorted(pairArray, sum)).toEqual(expect.arrayContaining(expectedResult));
    });
  })

  describe('([10,20,34,56,23,566,130,566,567,514,566], 576) => [10,566] |', () =>{
    let pairArray = [10,20,34,56,23,566,130,566,567,514,566]
    let sum = 576
    let expectedResult = [10,566]

    it('basicSolution |', () => {
      expect(algorithm.basicSolution(pairArray, sum)).toEqual(expect.arrayContaining(expectedResult));
    });

    it('basicSolutionSorted |', () => {
      expect(algorithm.basicSolutionSorted(pairArray, sum)).toEqual(expect.arrayContaining(expectedResult));
    });
  })

});

